import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileShowroomMobilService {
  constructor(@InjectRepository(User) private pbRepo: Repository<User>) { }
  create(dto: CreateUserDto) {
    return this.pbRepo.save(dto);
  }

  findAll() {
    return this.pbRepo.find();
  }

  findOne(id: string) {
    return this.pbRepo.findOne(id);
  }

  update(id: string, dto: UpdateUserDto) {
    return `This action updates a #${id} profileShowroomMobil`;
  }

  remove(id: string) {
    return `This action removes a #${id} profileShowroomMobil`;
  }
}
