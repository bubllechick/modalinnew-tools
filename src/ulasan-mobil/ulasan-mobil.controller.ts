import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UlasanMobilService } from './ulasan-mobil.service';
import { CreateUlasanMobilDto } from './dto/create-ulasan-mobil.dto';
import { UpdateUlasanMobilDto } from './dto/update-ulasan-mobil.dto';
import { InjectUser } from 'src/etc/decorator/inject-user.decorator';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/jwt.guard';

@ApiTags('ulasan-mobil')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('ulasan-mobil')
export class UlasanMobilController {
  constructor(private readonly ulasanMobilService: UlasanMobilService) { }

  @Post()
  @ApiBody({ type: CreateUlasanMobilDto })
  create(@InjectUser() createUlasanMobilDto: CreateUlasanMobilDto) {
    console.log(createUlasanMobilDto)
    return this.ulasanMobilService.create(createUlasanMobilDto);
  }

  @Get()
  findAll() {
    return this.ulasanMobilService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ulasanMobilService.findOne(id);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateUlasanMobilDto })
  update(@Param('id') id: string, @InjectUser() updateUlasanMobilDto: UpdateUlasanMobilDto) {
    return this.ulasanMobilService.update(id, updateUlasanMobilDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ulasanMobilService.remove(id);
  }
}
