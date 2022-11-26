import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { domainToASCII } from 'url';
import { CreateKomentarProdukMotorDto } from './dto/create-komentar-produk-motor.dto';
import { UpdateKomentarProdukMotorDto } from './dto/update-komentar-produk-motor.dto';
import { KomentarProdukMotor } from './entities/komentar-produk-motor.entity';

@Injectable()
export class KomentarProdukMotorService {
  constructor(@InjectRepository(KomentarProdukMotor) private kpmRepo: Repository<KomentarProdukMotor>) { }

  create(dto: CreateKomentarProdukMotorDto) {
    console.log(dto)
    return this.kpmRepo.save({
      komentar: dto.komentar, jualMotor: { id: dto.jualMotorId }, user: { id: dto.user['id'] }
    });
  }

  findAll() {
    return `This action returns all komentarProdukMotor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} komentarProdukMotor`;
  }

  update(id: number, updateKomentarProdukMotorDto: UpdateKomentarProdukMotorDto) {
    return `This action updates a #${id} komentarProdukMotor`;
  }

  remove(id: number) {
    return `This action removes a #${id} komentarProdukMotor`;
  }
}
