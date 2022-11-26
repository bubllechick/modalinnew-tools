import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { async } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateKomunitaDto } from './dto/create-komunita.dto';
import { UpdateKomunitaDto } from './dto/update-komunita.dto';
import { Komunita } from './entities/komunita.entity';

@Injectable()
export class KomunitasService {
  constructor(@InjectRepository(Komunita) private kRepo: Repository<Komunita>) { }
  create(createKomunitaDto: CreateKomunitaDto) {
    return this.kRepo.save(createKomunitaDto);
  }

  findAll() {
    return this.kRepo.find();
  }

  findOne(id: string) {
    return this.kRepo.findOne(id);
  }

  update(id: string, updateKomunitaDto: UpdateKomunitaDto) {
    updateKomunitaDto.id = id
    return this.kRepo.save(updateKomunitaDto);
  }

  async remove(id: string) {
    let komunitas = await this.kRepo.findOne(id)
    return this.kRepo.remove(komunitas);
  }
}
