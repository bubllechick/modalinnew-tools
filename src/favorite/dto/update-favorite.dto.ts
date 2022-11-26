import { PartialType } from '@nestjs/swagger';
import { FavoriteMobilDto, FavoriteMotorDto } from './create-favorite.dto';

export class UpdateFavoriteMobilDto extends PartialType(FavoriteMobilDto) { }
export class UpdateFavoriteMotorDto extends PartialType(FavoriteMotorDto) { }
