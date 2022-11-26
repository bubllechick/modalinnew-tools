import { Module } from '@nestjs/common';
import { KomentarProdukService } from './komentar-produk.service';
import { KomentarProdukController } from './komentar-produk.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KomentarProduk } from './entities/komentar-produk.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([KomentarProduk])
  ],
  controllers: [KomentarProdukController],
  providers: [KomentarProdukService]
})
export class KomentarProdukModule { }
