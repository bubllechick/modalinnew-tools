import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateKreditDto } from './dto/create-kredit.dto';
import { UpdateKreditDto } from './dto/update-kredit.dto';
import { Kredit } from './entities/kredit.entity';

@Injectable()
export class KreditService {
  constructor(@InjectRepository(Kredit) private kreditRepo: Repository<Kredit>) { }
  create(createKreditDto: CreateKreditDto) {
    return this.kreditRepo.save(createKreditDto);
  }

  findAll() {
    return this.kreditRepo.find();
  }

  findOne(id: string) {
    return this.kreditRepo.findOne(id);
  }

  update(id: string, updateKreditDto: UpdateKreditDto) {
    updateKreditDto.id = id
    return this.kreditRepo.save(updateKreditDto);
  }

  async remove(id: string) {
    const kredit = await this.kreditRepo.findOne(id)
    return this.kreditRepo.remove(kredit);
  }
}
