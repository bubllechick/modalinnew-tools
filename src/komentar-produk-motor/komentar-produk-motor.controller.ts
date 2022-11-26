import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { KomentarProdukMotorService } from './komentar-produk-motor.service';
import { CreateKomentarProdukMotorDto } from './dto/create-komentar-produk-motor.dto';
import { UpdateKomentarProdukMotorDto } from './dto/update-komentar-produk-motor.dto';
import { InjectUser } from 'src/etc/decorator/inject-user.decorator';
import { JwtGuard } from 'src/auth/jwt.guard';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('komentar-produk-motor')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('komentar-produk-motor')
export class KomentarProdukMotorController {
  constructor(private readonly komentarProdukMotorService: KomentarProdukMotorService) { }

  @Post()
  @ApiBody({ type: CreateKomentarProdukMotorDto })
  create(@InjectUser() createKomentarProdukMotorDto: CreateKomentarProdukMotorDto) {
    return this.komentarProdukMotorService.create(createKomentarProdukMotorDto);
  }

  @Get()
  findAll() {
    return this.komentarProdukMotorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.komentarProdukMotorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKomentarProdukMotorDto: UpdateKomentarProdukMotorDto) {
    return this.komentarProdukMotorService.update(+id, updateKomentarProdukMotorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.komentarProdukMotorService.remove(+id);
  }
}
