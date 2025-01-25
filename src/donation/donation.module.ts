import { Module } from '@nestjs/common';
import { DonationService } from './donation.service';
import { DonationController } from './donation.controller';
import { StripeService } from 'src/stripe/stripe.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Donation } from './entities/donation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Donation])],
  controllers: [DonationController],
  providers: [DonationService, StripeService],
})
export class DonationModule { }
