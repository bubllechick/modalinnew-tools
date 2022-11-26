import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDanaTunaiDto } from './dto/create-dana-tunai.dto';
import { UpdateDanaTunaiDto } from './dto/update-dana-tunai.dto';
import { DanaTunai } from './entities/dana-tunai.entity';

@Injectable()
export class DanaTunaiService {
  constructor(@InjectRepository(DanaTunai) private dtRepo: Repository<DanaTunai>) { }
  create(createDanaTunaiDto: CreateDanaTunaiDto) {
    console.log(createDanaTunaiDto);
    return this.dtRepo.save(createDanaTunaiDto);
  }

  findAll() {
    return this.dtRepo.find();
  }

  findOne(id: string) {
    return this.dtRepo.findOne(id);
  }

  update(id: string, updateDanaTunaiDto: UpdateDanaTunaiDto) {
    updateDanaTunaiDto.id = id
    return this.dtRepo.save(updateDanaTunaiDto);
  }

  async remove(id: string) {
    let dana = await this.dtRepo.findOne(id)
    return this.dtRepo.remove(dana);
  }
}
