import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, BadRequestException, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';
import { JwtGuard } from 'src/auth/jwt.guard';

@ApiTags('profile-sales')
@Controller('profile-sales')
export class ProfileSalesController {
  constructor(private readonly profileSalesService: UserService) { }

  @Post()
  async create(@Body() dto: CreateUserDto) {
    const f = await this.profileSalesService.convertToFile(dto.foto)
    let val = Math.floor(1000 + Math.random() * 900000);
    const role = 'sales';
    dto.foto = f
    dto.code = val
    dto.role = role
    let findNo = await this.profileSalesService.findNoHp(dto.no_hp);

    if (findNo) {
      throw new BadRequestException({ message: 'no sudah digunakan' })
    } else {
      let valid = await this.profileSalesService.create(dto);
      if (valid) {
        // this.profileSalesService.sendOtp(valid.no_hp, val);
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
    return this.profileSalesService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  findOne(@Param('id') id: string) {
    return this.profileSalesService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  async update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    dto.id = id
    let val = Math.floor(1000 + Math.random() * 900000);
    const f = await this.profileSalesService.convertToFile(dto.foto)
    dto.code = val
    dto.foto = f
    const role = 'sales';
    dto.role = role
    let valid = await this.profileSalesService.update(id, dto);
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
    return this.profileSalesService.remove(id);
  }
}
