import { Module } from '@nestjs/common';
import { UlasanMobilService } from './ulasan-mobil.service';
import { UlasanMobilController } from './ulasan-mobil.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UlasanMobil } from './entities/ulasan-mobil.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UlasanMobil])
  ],
  controllers: [UlasanMobilController],
  providers: [UlasanMobilService]
})
export class UlasanMobilModule { }
