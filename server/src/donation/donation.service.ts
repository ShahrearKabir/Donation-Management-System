import { Injectable } from '@nestjs/common';
import { Donation } from './entities/donation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StripeService } from 'src/stripe/stripe.service';
import { User } from 'src/user/entities/user.entity';
import { Fund } from 'src/fund/entities/fund.entity';

@Injectable()
export class DonationService {
  constructor(
    private readonly stripeService: StripeService,
    @InjectRepository(Donation) private donationRepository: Repository<Donation>,
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Fund) private fundRepository: Repository<Fund>,
  ) { }

  async createDonation(createDonationDto) {
    const { email, amount, fundId } = createDonationDto;
    const userInfo = await this.userRepository.findOne({ where: { email: email } });
    const fundInfo = await this.fundRepository.findOne({ where: { id: fundId } });

    const donation = new Donation();
    donation.user = userInfo;
    donation.fund = fundInfo;
    donation.amount = amount / 100;
    await this.donationRepository.save(donation);

    const clientSecret = await this.stripeService.createPaymentIntent(amount);
    return { clientSecret };
  }

  findAll() {
    return this.donationRepository
      .find({
        // select: ['amount', 'user'],
        relations: ['user', 'fund'],
      });
  }
}
