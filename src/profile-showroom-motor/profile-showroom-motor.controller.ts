import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, BadRequestException, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { JwtGuard } from 'src/auth/jwt.guard';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';
import { UserService } from 'src/user/user.service';
import { ProfileShowroomMotorService } from './profile-showroom-motor.service';

@ApiTags('profile-showroom-motor')
@Controller('profile-showroom-motor')
export class ProfileShowroomMotorController {
  constructor(private readonly profileShowroomMotorService: UserService) { }

  @Post()
  async create(@Body() dto: CreateUserDto) {
    const f = await this.profileShowroomMotorService.convertToFile(dto.foto)
    let val = Math.floor(1000 + Math.random() * 900000);
    dto.code = val
    dto.foto = f
    const role = 'ShowroomMotor';
    dto.role = role

    let findNo = await this.profileShowroomMotorService.findNoHp(dto.no_hp);

    if (findNo) {
      throw new BadRequestException({ message: 'no sudah digunakan' })
    } else {
      let valid = await this.profileShowroomMotorService.create(dto);
      if (valid) {
        // this.profileShowroomMotorService.sendOtp(valid.no_hp, val);
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
    return this.profileShowroomMotorService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  findOne(@Param('id') id: string) {
    return this.profileShowroomMotorService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  async update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    dto.id = id
    const f = await this.profileShowroomMotorService.convertToFile(dto.foto)
    let val = Math.floor(1000 + Math.random() * 900000);
    dto.code = val
    dto.foto = f
    const role = 'ShowroomMotor';
    dto.role = role

    let valid = await this.profileShowroomMotorService.update(id, dto);
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
    return this.profileShowroomMotorService.remove(id);
  }
}
