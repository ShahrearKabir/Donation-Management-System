import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';
import { DonationModule } from './donation/donation.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { StripeModule } from './stripe/stripe.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env']
    }),
    DatabaseModule.forRoot(),
    UserModule,
    AuthModule,
    RoleModule,
    DonationModule,
    StripeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
