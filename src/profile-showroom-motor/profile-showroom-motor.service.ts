import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileShowroomMotorService {
  constructor(@InjectRepository(User) private psmRepo: Repository<User>) { }
  create(createProfileShowroomMotorDto: CreateUserDto) {
    return this.psmRepo.save(createProfileShowroomMotorDto);
  }

  findAll() {
    return this.psmRepo.find();
  }

  findOne(id: string) {
    return this.psmRepo.findOne(id);
  }

  update(id: string, updateProfileShowroomMotorDto: UpdateUserDto) {
    updateProfileShowroomMotorDto.id = id
    return this.psmRepo.save(updateProfileShowroomMotorDto);
  }

  async remove(id: string) {
    let psm = await this.psmRepo.findOne(id)
    return this.psmRepo.remove(psm);
  }
}
