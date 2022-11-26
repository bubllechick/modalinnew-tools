import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateKomentarProdukDto } from './dto/create-komentar-produk.dto';
import { UpdateKomentarProdukDto } from './dto/update-komentar-produk.dto';
import { KomentarProduk } from './entities/komentar-produk.entity';

@Injectable()
export class KomentarProdukService {
  constructor(@InjectRepository(KomentarProduk) private kRepo: Repository<KomentarProduk>) { }

  create(dto: CreateKomentarProdukDto) {
    return this.kRepo.save({
      komentar: dto.komentar, jualMobil: { id: dto.jualMobilId }, user: { id: dto.user['id'] }
    });
  }

  findAll() {
    return this.kRepo.find();
  }

  findOne(id: string) {
    return this.kRepo.findOne(id);
  }

  update(id: string, dto: UpdateKomentarProdukDto) {
    dto.id = id
    return this.kRepo.save({
      komentar: dto.komentar, jualMobil: { id: dto.jualMobilId },
      user: { id: dto.user['id'] }
    });
  }

  async remove(id: string) {
    const data = await this.kRepo.findOne(id);
    return this.kRepo.remove(data);
  }
}
