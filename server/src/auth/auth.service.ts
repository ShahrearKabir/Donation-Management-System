import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { JwtPayload } from './interface/jwt-payload.interface';
import { CreateAuthDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) { }

  async login(user: CreateAuthDto) {
    const payload: JwtPayload = { username: user.username, password: user.password };

    const valid = await this.validateUser(payload.username, payload.password)

    if (!valid) {
      return new BadRequestException()
    }

    return {
      access_token: this.jwtService.sign(valid, { secret: process.env.JWT_SECRET }),
    };
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(email);
    // if (user && user.password === pass) {
    //   return user;
    // }
    // return null;
    if (!user) {
      return null
    }

    const passwordMatch = await bcrypt.compare(pass, user.password);

    if (!passwordMatch) {
      throw new BadRequestException()
    }

    return {
      id: user.id,
      username: user.email,
      roles: user.roles.map(role => role.name)
    };
  }

}
