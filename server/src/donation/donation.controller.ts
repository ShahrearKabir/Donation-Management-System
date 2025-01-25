import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { DonationService } from './donation.service';
import { User } from 'src/user/entities/user.entity';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { RolesGuard } from 'src/auth/guard/roles.guard';
import { Roles } from 'src/auth/guard/roles.decorator';

@Controller('donation')
export class DonationController {
  constructor(private readonly donationService: DonationService) { }

  // @ApiBearerAuth()
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles('DONOR') 
  @Post()
  async createDonation(@Body() donationDto: { user: User; amount: number }) {
    return this.donationService.createDonation(donationDto.user, donationDto.amount);
  }

  @Get()
  async findAll() {
    return this.donationService.findAll();
  }
}
