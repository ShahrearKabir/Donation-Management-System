import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { DonationService } from './donation.service';
import { User } from 'src/user/entities/user.entity';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@Controller('donation')
export class DonationController {
  constructor(private readonly donationService: DonationService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createDonation(@Body() donationDto: { user: User; amount: number }) {
    return this.donationService.createDonation(donationDto.user, donationDto.amount);
  }
}
