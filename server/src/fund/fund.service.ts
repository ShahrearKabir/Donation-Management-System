import { Injectable } from '@nestjs/common';
import { Fund } from './entities/fund.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StripeService } from 'src/stripe/stripe.service';
import { User } from 'src/user/entities/user.entity';
import { CreateFundDto } from './dto/create-fund.dto';
import { UpdateFundDto } from './dto/update-fund.dto';

@Injectable()
export class FundService {
  constructor(
    private readonly stripeService: StripeService,
    @InjectRepository(Fund) private fundRepository: Repository<Fund>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) { }

  async create(createFundDto: CreateFundDto) {
    // const userInfo = await this.userRepository.findOne({ where: { email: email } });
    const fund = new Fund();
    // fund.user = userInfo;
    // fund.amount = amount / 100;
    return this.fundRepository.save(createFundDto);

    // const clientSecret = await this.stripeService.createPaymentIntent(amount);
    // return { clientSecret };
  }

  findAll() {
    return this.fundRepository
      .find({
        // select: ['amount', 'user'],
        // relations: ['user']
      });
  }

  findOne(id: number) {
    return this.fundRepository.findOneBy({ id });
  }


  update(id: number, updateRoleDto: UpdateFundDto) {
    return this.fundRepository.update(id, updateRoleDto);
  }

  remove(id: number) {
    return this.fundRepository.delete(id);
  }
}
