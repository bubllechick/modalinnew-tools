import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, BadRequestException, UseGuards, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';

import { JwtGuard } from 'src/auth/jwt.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { FileService } from 'src/file/file.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly fileService: FileService) { }

  @Post()
  @ApiBody({ type: CreateUserDto })
  async create(@Body() dto: CreateUserDto) {
    // const dtousr = await this.fileService.uploadImage(dto.foto, 'img_profile');
    if (dto.foto)
      await this.fileService.uploadImage(dto.foto, 'img_profile')
        .then(({ hashedFileName: imageName }) => { dto.foto = imageName; })
        .catch((err) => { throw new BadRequestException('Error Upload Image'); });

    // dto.foto = dtousr.toString();
    // const f = await this.userService.convertToFile(dto.foto)
    // let val = Math.floor(100000 + Math.random() * 900000);
    // dto.code = val
    var dd = function () {
      let v = Math.floor(100000 + Math.random() * 900000);
      return v;
    }

    if (dd().toString().length === 6) {
      dto.code = dd();
    } else {
      dd();
    }
    console.log(dto.foto);
    console.log(dto)
    // dto.foto = dtousr.toString()
    const role = 'user';
    dto.role = role
    let findNo = await this.userService.findNoHp(dto.no_hp);

    if (findNo) {
      throw new BadRequestException({ message: 'no sudah digunakan' });
    } else {
      let valid = await this.userService.create(dto);
      if (valid) {
        // this.userService.sendOtp(valid.no_hp, val);
        return valid;
      } else {
        throw new BadRequestException({ messages: 'gagal tersimpan' })
      }
    }
  }

  @Get('user-info')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  async findAll(@Request() req) {
    console.log(req.user)
    console.log(req.user.id)
    const id = req.user.id
    const data = await this.userService.findOne(id)
    console.log(data)
    return data;
  }

  @Get('home')
  async home() {
    const dataHome = await this.userService.getHome();
    return dataHome
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  async update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    const user_id = await this.userService.findOne(id);
    if (user_id.foto === dto.foto) {
      dto.foto = user_id.foto
      console.log('ga usah diupdate');
    } else {
      this.fileService.delete(user_id.foto, 'img_profile');
      if (dto.foto)
        await this.fileService.uploadImage(dto.foto, 'img_profile')
          .then(({ hashedFileName: imageName }) => { dto.foto = imageName; })
          .catch((err) => { throw new BadRequestException('Error Upload Image'); });
      console.log('di update');
    }

    dto.id = id
    var dd = function () {
      let v = Math.floor(100000 + Math.random() * 900000);
      return v;
    }

    if (dd().toString().length === 6) {
      dto.code = dd();
    } else {
      dd();
    }

    // const role = 'user';
    // dto.role = role
    console.log(dto);
    let valid = await this.userService.update(id, dto);
    // let findNo = await this.userService.findNoHp(dto.no_hp);

    // if (findNo) {
    //   throw new BadRequestException({ message: 'no sudah digunakan' });
    // } else {
    //   let valid = await this.userService.create(dto);
    if (valid) {
      // this.userService.sendOtp(valid.no_hp, val);
      return valid;
    } else {
      throw new BadRequestException({ messages: 'gagal tersimpan' })
    }
  }

  @Delete(':id')
  // @ApiBearerAuth()
  // @UseGuards(JwtGuard)
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}


  // @Get('user-favorite')
  // @ApiBearerAuth()
  // @UseGuards(JwtGuard)
  // findAllFav() {
  //   return this.userService.findAllFav();
  // }