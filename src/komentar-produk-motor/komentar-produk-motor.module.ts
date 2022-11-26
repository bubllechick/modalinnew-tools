import { Module } from '@nestjs/common';
import { KomentarProdukMotorService } from './komentar-produk-motor.service';
import { KomentarProdukMotorController } from './komentar-produk-motor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KomentarProdukMotor } from './entities/komentar-produk-motor.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([KomentarProdukMotor])
  ],
  controllers: [KomentarProdukMotorController],
  providers: [KomentarProdukMotorService]
})
export class KomentarProdukMotorModule { }
