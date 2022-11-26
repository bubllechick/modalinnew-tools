import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { KomentarProdukService } from './komentar-produk.service';
import { CreateKomentarProdukDto } from './dto/create-komentar-produk.dto';
import { UpdateKomentarProdukDto } from './dto/update-komentar-produk.dto';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { InjectUser } from 'src/etc/decorator/inject-user.decorator';
import { } from 'express';
import { JwtGuard } from 'src/auth/jwt.guard';

@ApiTags('komentar-produk-mobil')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('komentar-produk')
export class KomentarProdukController {
  constructor(private readonly komentarProdukService: KomentarProdukService) { }

  @Post()
  @ApiBody({ type: CreateKomentarProdukDto })
  create(@InjectUser() dto: CreateKomentarProdukDto) {
    console.log(dto)
    return this.komentarProdukService.create(dto);
  }

  @Get()
  findAll() {
    return this.komentarProdukService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.komentarProdukService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @InjectUser() updateKomentarProdukDto: UpdateKomentarProdukDto) {
    return this.komentarProdukService.update(id, updateKomentarProdukDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.komentarProdukService.remove(id);
  }
}
