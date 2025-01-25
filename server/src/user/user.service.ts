import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Role } from 'src/role/entities/role.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Role) private readonly roleRepository: Repository<Role>,
  ) { }


  findAll() {
    return this.userRepository.find();
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email }, relations: ['roles'], select: ['id', 'email', 'password'] });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, password, userType } = createUserDto;

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user entity
    const user = new User();
    user.email = email;
    user.password = hashedPassword;

    // Assign default role to the user (donor)
    const defaultRole = await this.roleRepository.findOne({ where: { name: userType || 'DONOR' } });
    if (defaultRole) {
      user.roles = [defaultRole];
    }

    // Save the user to the database
    return this.userRepository.save(user);
  }

}
