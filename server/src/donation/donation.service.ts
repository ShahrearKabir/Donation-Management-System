import { Injectable } from '@nestjs/common';
import { Donation } from './entities/donation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StripeService } from 'src/stripe/stripe.service';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class DonationService {
  constructor(
    private readonly stripeService: StripeService,
    @InjectRepository(Donation)
    private donationRepository: Repository<Donation>,
  ) {}

  async createDonation(user: User, amount: number) {
    const donation = new Donation();
    donation.user = user;
    donation.amount = amount;
    await this.donationRepository.save(donation);

    const clientSecret = await this.stripeService.createPaymentIntent(amount);
    return { clientSecret };
  }
}
