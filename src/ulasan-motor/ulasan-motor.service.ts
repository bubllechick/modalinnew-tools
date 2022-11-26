import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUlasanMotorDto } from './dto/create-ulasan-motor.dto';
import { UpdateUlasanMotorDto } from './dto/update-ulasan-motor.dto';
import { UlasanMotor } from './entities/ulasan-motor.entity';

@Injectable()
export class UlasanMotorService {

  constructor(@InjectRepository(UlasanMotor) private repo: Repository<UlasanMotor>) { }

  create(dto: CreateUlasanMotorDto) {
    return this.repo.save({
      rating: dto.rating, user: { id: dto.user['id'] }, jualMotor: { id: dto.jualMotor }
    });
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: string) {
    return this.repo.findOne(id);
  }

  update(id: string, dto: UpdateUlasanMotorDto) {
    dto.id = id
    return this.repo.save({
      rating: dto.rating, user: { id: dto.user['id'] }, jualMotor: { id: dto.jualMotor }
    });
  }

  async remove(id: string) {
    let ul = await this.repo.findOne(id)
    return this.repo.remove(ul);
  }
}
