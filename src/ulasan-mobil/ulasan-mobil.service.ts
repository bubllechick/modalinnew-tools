import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUlasanMobilDto } from './dto/create-ulasan-mobil.dto';
import { UpdateUlasanMobilDto } from './dto/update-ulasan-mobil.dto';
import { UlasanMobil } from './entities/ulasan-mobil.entity';

@Injectable()
export class UlasanMobilService {

  constructor(@InjectRepository(UlasanMobil) private repo: Repository<UlasanMobil>) { }

  create(dto: CreateUlasanMobilDto) {
    return this.repo.save({
      rating: dto.rating, user: { id: dto.user['id'] }, jualMobil: { id: dto.jualMobil }
    });
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: string) {
    return this.repo.findOne(id);
  }

  update(id: string, dto: UpdateUlasanMobilDto) {
    dto.id = id
    return this.repo.save({
      rating: dto.rating, user: { id: dto.user['id'] }, jualMobil: { id: dto.jualMobil }
    });
  }

  async remove(id: string) {
    let ul = await this.repo.findOne(id)
    return this.repo.remove(ul);
  }
}
