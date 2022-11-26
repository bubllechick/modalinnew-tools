import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileSalesService {
  constructor(@InjectRepository(User) private psRepo: Repository<User>) { }
  create(createProfileSaleDto: CreateUserDto) {
    return this.psRepo.save(createProfileSaleDto);
  }

  findAll() {
    return this.psRepo.find();
  }

  findOne(id: string) {
    return this.psRepo.findOne(id);
  }

  update(id: string, updateProfileSaleDto: UpdateUserDto) {
    updateProfileSaleDto.id = id
    return this.psRepo.save(updateProfileSaleDto);
  }

  async remove(id: string) {
    let sales = await this.psRepo.findOne(id)
    return this.psRepo.remove(sales);
  }

}
