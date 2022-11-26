import { Module } from '@nestjs/common';
import { ProfileSalesService } from './profile-sales.service';
import { ProfileSalesController } from './profile-sales.controller';
import { User } from 'src/user/entities/user.entity';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    UserModule,
  ],
  controllers: [ProfileSalesController],
  providers: [ProfileSalesService]
})
export class ProfileSalesModule { }
