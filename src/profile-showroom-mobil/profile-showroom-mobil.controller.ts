import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, BadRequestException, UseGuards } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { JwtGuard } from 'src/auth/jwt.guard';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';
import { UserService } from 'src/user/user.service';

@ApiTags('profile-showroom-mobil')
@Controller('profile-showroom-mobil')
export class ProfileShowroomMobilController {
  constructor(private readonly profileShowroomMobilService: UserService) { }

  @Post()
  async create(@Body() dto: CreateUserDto) {
    const f = await this.profileShowroomMobilService.convertToFile(dto.foto)
    let val = Math.floor(1000 + Math.random() * 900000);

    dto.code = val
    dto.foto = f
    const role = 'ShowroomMobil';
    dto.role = role

    let findNo = await this.profileShowroomMobilService.findNoHp(dto.no_hp);
    if (findNo) {
      throw new BadRequestException({ message: 'no sudah digunakan' })
    } else {
      let valid = await this.profileShowroomMobilService.create(dto);
      if (valid) {
        // this.profileShowroomMobilService.sendOtp(valid.no_hp, val);
        return valid;
      } else {
        throw new BadRequestException({ messages: 'gagal tersimpan' })
      }
    }

  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  findAll() {
    return this.profileShowroomMobilService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  findOne(@Param('id') id: string) {
    return this.profileShowroomMobilService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  async update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    dto.id = id
    let val = Math.floor(1000 + Math.random() * 900000);
    const f = await this.profileShowroomMobilService.convertToFile(dto.foto)

    console.log(val)
    dto.code = val
    dto.foto = f
    const role = 'ShowroomMobil';
    dto.role = role

    let valid = await this.profileShowroomMobilService.update(id, dto);
    if (valid) {
      return valid;
    } else {
      throw new BadRequestException({ messages: 'gagal tersimpan' })
    }
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  remove(@Param('id') id: string) {
    return this.profileShowroomMobilService.remove(id);
  }
}
