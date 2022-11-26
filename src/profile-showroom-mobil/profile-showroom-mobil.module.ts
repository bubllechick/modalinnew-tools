import { Module } from '@nestjs/common';
import { ProfileShowroomMobilService } from './profile-showroom-mobil.service';
import { ProfileShowroomMobilController } from './profile-showroom-mobil.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    UserModule
  ],
  controllers: [ProfileShowroomMobilController],
  providers: [ProfileShowroomMobilService]
})
export class ProfileShowroomMobilModule { }
