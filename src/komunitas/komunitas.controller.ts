import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { KomunitasService } from './komunitas.service';
import { CreateKomunitaDto } from './dto/create-komunita.dto';
import { UpdateKomunitaDto } from './dto/update-komunita.dto';
import { InjectUser } from 'src/etc/decorator/inject-user.decorator';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/jwt.guard';

@ApiTags('Komunitas')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('komunitas')
export class KomunitasController {
  constructor(private readonly komunitasService: KomunitasService) { }

  @Post()
  @ApiBody({ type: CreateKomunitaDto })
  create(@InjectUser() createKomunitaDto: CreateKomunitaDto) {
    return this.komunitasService.create(createKomunitaDto);
  }

  @Get()
  findAll() {
    return this.komunitasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.komunitasService.findOne(id);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateKomunitaDto })
  update(@Param('id') id: string, @InjectUser() updateKomunitaDto: UpdateKomunitaDto) {
    return this.komunitasService.update(id, updateKomunitaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.komunitasService.remove(id);
  }
}
