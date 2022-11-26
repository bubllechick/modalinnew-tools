import { Module } from '@nestjs/common';
import { ProfileBengkelService } from './profile-bengkel.service';
import { ProfileBengkelController } from './profile-bengkel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { User } from 'src/user/entities/user.entity';
import { LayananBengkel, RatingBengkel } from './entities/bengkel.entity';
import { DetailBengkel } from './entities/detail-bengkel.entity';
import { FileService } from 'src/file/file.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, LayananBengkel, DetailBengkel, RatingBengkel]),
    UserModule,
  ],
  controllers: [ProfileBengkelController],
  providers: [ProfileBengkelService, FileService],
  exports: [ProfileBengkelService]
})
export class ProfileBengkelModule { }
