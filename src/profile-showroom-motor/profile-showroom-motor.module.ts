import { Module } from '@nestjs/common';
import { ProfileShowroomMotorService } from './profile-showroom-motor.service';
import { ProfileShowroomMotorController } from './profile-showroom-motor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    UserModule
  ],
  controllers: [ProfileShowroomMotorController],
  providers: [ProfileShowroomMotorService]
})
export class ProfileShowroomMotorModule { }
