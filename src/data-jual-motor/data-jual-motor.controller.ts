import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles, UseGuards } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { JwtGuard } from 'src/auth/jwt.guard';
import { DataJualMotorService } from './data-jual-motor.service';
import { CreateDataJualMotorDto } from './dto/create-data-jual-motor.dto';
import { UpdateDataJualMotorDto } from './dto/update-data-jual-motor.dto';

@ApiTags('data-jual-motor')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('data-jual-motor')
export class DataJualMotorController {
  constructor(
    private readonly dataJualMotorService: DataJualMotorService) { }

  @Post()
  async create1(@Body() dto: CreateDataJualMotorDto) {

    return await this.dataJualMotorService.create(dto);
  }

  @Get()
  findAll() {
    return this.dataJualMotorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dataJualMotorService.findOne(id);
  }

  @Patch(':id')
  async update(@Param(':id') id: string, @Body() dto: UpdateDataJualMotorDto) {
    return await this.dataJualMotorService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.dataJualMotorService.remove(id);
  }
}



   // dto.galeri1 = await this.dataJualMotorService.convertToFile(dto.galeri1)
    // dto.galeri2 = await this.dataJualMotorService.convertToFile(dto.galeri2)
    // dto.galeri3 = await this.dataJualMotorService.convertToFile(dto.galeri3)
    // dto.galeri4 = await this.dataJualMotorService.convertToFile(dto.galeri4)
    // dto.galeri5 = await this.dataJualMotorService.convertToFile(dto.galeri5)
    // dto.galeri6 = await this.dataJualMotorService.convertToFile(dto.galeri6)
    // dto.galeri7 = await this.dataJualMotorService.convertToFile(dto.galeri7)
    // dto.galeri8 = await this.dataJualMotorService.convertToFile(dto.galeri8)

    // dto.stkn_depan = await this.dataJualMotorService.convertToFile(dto.stkn_depan)
    // dto.stkn_belakang = await this.dataJualMotorService.convertToFile(dto.stkn_belakang)
    // dto.buku_manual = await this.dataJualMotorService.convertToFile(dto.buku_manual)
    // dto.buku_service = await this.dataJualMotorService.convertToFile(dto.buku_service)
    // dto.kunci_cadangan = await this.dataJualMotorService.convertToFile(dto.kunci_cadangan)
    // dto.bpkb = await this.dataJualMotorService.convertToFile(dto.bpkb)
    // console.log(dto)

        // dto.galeri1 = await this.dataJualMotorService.convertToFile(dto.galeri1)
    // dto.galeri2 = await this.dataJualMotorService.convertToFile(dto.galeri2)
    // dto.galeri3 = await this.dataJualMotorService.convertToFile(dto.galeri3)
    // dto.galeri4 = await this.dataJualMotorService.convertToFile(dto.galeri4)
    // dto.galeri5 = await this.dataJualMotorService.convertToFile(dto.galeri5)
    // dto.galeri6 = await this.dataJualMotorService.convertToFile(dto.galeri6)
    // dto.galeri7 = await this.dataJualMotorService.convertToFile(dto.galeri7)
    // dto.galeri8 = await this.dataJualMotorService.convertToFile(dto.galeri8)

    // dto.stkn_depan = await this.dataJualMotorService.convertToFile(dto.stkn_depan)
    // dto.stkn_belakang = await this.dataJualMotorService.convertToFile(dto.stkn_belakang)
    // dto.buku_manual = await this.dataJualMotorService.convertToFile(dto.buku_manual)
    // dto.buku_service = await this.dataJualMotorService.convertToFile(dto.buku_service)
    // dto.kunci_cadangan = await this.dataJualMotorService.convertToFile(dto.kunci_cadangan)
    // dto.bpkb = await this.dataJualMotorService.convertToFile(dto.bpkb)