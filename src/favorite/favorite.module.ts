import { Module } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { FavoriteController } from './favorite.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Favorite } from './entities/favorite.entity';
import { FavoriteMobil } from './entities/favorite-mobil.entity';
import { FavoriteMotor } from './entities/favorite-motor.entity';
import { JualMobilModule } from 'src/jual-mobil/jual-mobil.module';
import { JualMotorModule } from 'src/jual-motor/jual-motor.module';

@Module({
  imports: [
    JualMobilModule,
    JualMotorModule,
    TypeOrmModule.forFeature([Favorite, FavoriteMobil, FavoriteMotor])
  ],
  controllers: [FavoriteController],
  providers: [FavoriteService]
})
export class FavoriteModule { }
