import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFavoriteMobilDto, CreateFavoriteMotorDto } from './dto/create-favorite.dto';
import { FavoriteMobil } from './entities/favorite-mobil.entity';
import { FavoriteMotor } from './entities/favorite-motor.entity';
import { Favorite } from './entities/favorite.entity';

@Injectable()
export class FavoriteService {
  constructor(
    @InjectRepository(Favorite) private favoriteRepo: Repository<Favorite>,
    @InjectRepository(FavoriteMobil) private favoriteMobilRepo: Repository<FavoriteMobil>,
    @InjectRepository(FavoriteMotor) private favoriteMotorRepo: Repository<FavoriteMotor>,
  ) { }

  async createfavoriteMotor(dto: CreateFavoriteMotorDto) {
    console.log(dto);
    const data = await this.favoriteMotorRepo.save({
      jualmotor: { id: dto.jualMotor },
      user: dto.user
    });
    return data
  }

  async createfavoriteMobil(dto: CreateFavoriteMobilDto) {
    console.log(dto);
    const data = await this.favoriteMobilRepo.save({
      jualmobil: { id: dto.jualMobil },
      user: dto.user
    });
    return data
  }

  findAllfavoriteMotor() {
    return this.favoriteMotorRepo.find({ relations: ['jualmotor', 'jualmotor.dataJualmotor', 'jualmotor.dataJualmotor.galerimotor', 'jualmotor.dataJualmotor.dokumenmotor'] });
  }

  findAllfavoriteMobil() {
    return this.favoriteMobilRepo.find({ relations: ['jualmobil', 'jualmobil.datajualmobil', 'jualmobil.datajualmobil.galeriMobil', 'jualmobil.datajualmobil.dokumenMobil'] });
  }

  async removefavoriteMobil(id: string) {
    const data = await this.favoriteMobilRepo.findOne(id);
    if (data) {
      return this.favoriteMobilRepo.remove(data);
    } else {
      throw new BadRequestException({ message: 'data not found' });
    }
  }

  async removefavoriteMotor(id: string) {
    const data = await this.favoriteMotorRepo.findOne(id);
    if (data) {
      return this.favoriteMotorRepo.remove(data);
    } else {
      throw new BadRequestException({ message: 'data not found' });
    }
  }
}
