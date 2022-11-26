import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards, Put } from '@nestjs/common';
import { JualMotorService } from './jual-motor.service';
import { CreateJualMotorDto } from './dto/create-jual-motor.dto';
import { UpdateJualMotorDto } from './dto/update-jual-motor.dto';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { Request as ExpReq } from 'express'
import { JwtGuard } from 'src/auth/jwt.guard';
import { InjectUser } from 'src/etc/decorator/inject-user.decorator';

@ApiTags('Jual-motor')
@Controller('jual-motor')
export class JualMotorController {
  constructor(private readonly jualMotorService: JualMotorService) { }

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiBody({ type: CreateJualMotorDto })
  create(@InjectUser() dto: CreateJualMotorDto) {
    // console.log(dto)
    return this.jualMotorService.create(dto);
  }

  @Get()
  findAll() {
    return this.jualMotorService.findAll();
  }

  @Get('get-all-new')
  findAllBaru() {
    return this.jualMotorService.findAllBaru();
  }

  @Get('get-all-second')
  findAllBekas() {
    return this.jualMotorService.findAllBekas();
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  findOne(@Param('id') id: string) {
    return this.jualMotorService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiBody({ type: UpdateJualMotorDto })
  async update(@Param('id') id: string, @InjectUser() updateJualMotorDto: UpdateJualMotorDto) {
    return await this.jualMotorService.update(id, updateJualMotorDto);
  }


  @Put(':search')
  async search(@Param('search') search: string) {
    return await this.jualMotorService.findSearch(search);
  }

  @Delete(':id')
  // @ApiBearerAuth()
  // @UseGuards(JwtGuard)
  remove(@Param('id') id: string) {
    return this.jualMotorService.remove(id);
  }
}
