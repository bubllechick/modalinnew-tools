import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { CreateFavoriteMobilDto, CreateFavoriteMotorDto } from './dto/create-favorite.dto';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { InjectUser } from 'src/etc/decorator/inject-user.decorator';
import { JwtGuard } from 'src/auth/jwt.guard';
import { UpdateFavoriteMobilDto, UpdateFavoriteMotorDto } from './dto/update-favorite.dto';

@ApiTags('favorite')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('favorite')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) { }

  @Post('/favoriteMotor')
  @ApiBody({ type: CreateFavoriteMotorDto })
  favoriteMotor(@InjectUser() dto: CreateFavoriteMotorDto) {
    return this.favoriteService.createfavoriteMotor(dto);
  }

  @Post('/favoriteMobil')
  @ApiBody({ type: CreateFavoriteMobilDto })
  favoriteMobil(@InjectUser() dto: CreateFavoriteMobilDto) {
    return this.favoriteService.createfavoriteMobil(dto);
  }

  @Get('/favoriteMotor')
  findAllfavoriteMotor() {
    return this.favoriteService.findAllfavoriteMotor();
  }
  @Get('/favoriteMobil')
  findAllfavoriteMobil() {
    return this.favoriteService.findAllfavoriteMobil();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.favoriteService.findOne(id);
  // }

  // @Patch(':id')
  // updatefavoriteMotor(@Param('id') id: string, @Body() dto: UpdateFavoriteMotorDto) {
  //   return this.favoriteService.updatefavoriteMotor(id, dto);
  // }

  // @Patch(':id')
  // updatefavoriteMobil(@Param('id') id: string, @Body() dto: UpdateFavoriteMobilDto) {
  //   return this.favoriteService.updatefavoriteMobil(id, dto);
  // }

  @Delete(':id/removefavoriteMobil')
  removefavoriteMobil(@Param('id') id: string) {
    return this.favoriteService.removefavoriteMobil(id);
  }

  @Delete(':id/removefavoriteMotor')
  removefavoriteMotor(@Param('id') id: string) {
    return this.favoriteService.removefavoriteMotor(id);
  }
}
