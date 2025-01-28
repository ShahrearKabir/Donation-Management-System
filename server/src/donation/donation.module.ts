import { Module } from '@nestjs/common';
import { DonationService } from './donation.service';
import { DonationController } from './donation.controller';
import { StripeService } from 'src/stripe/stripe.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Donation } from './entities/donation.entity';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';
import { Role } from 'src/role/entities/role.entity';
import { Fund } from 'src/fund/entities/fund.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Donation, User, Role, Fund])],
  controllers: [DonationController],
  providers: [DonationService, StripeService, UserService],
})
export class DonationModule { }
