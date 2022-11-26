import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UlasanMotorService } from './ulasan-motor.service';
import { CreateUlasanMotorDto } from './dto/create-ulasan-motor.dto';
import { UpdateUlasanMotorDto } from './dto/update-ulasan-motor.dto';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/jwt.guard';
import { InjectUser } from 'src/etc/decorator/inject-user.decorator';

@ApiTags('ulasan-motor')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('ulasan-motor')
export class UlasanMotorController {
  constructor(private readonly ulasanMotorService: UlasanMotorService) { }

  @Post()
  @ApiBody({ type: CreateUlasanMotorDto })
  create(@InjectUser() createUlasanMotorDto: CreateUlasanMotorDto) {
    return this.ulasanMotorService.create(createUlasanMotorDto);
  }

  @Get()
  findAll() {
    return this.ulasanMotorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ulasanMotorService.findOne(id);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateUlasanMotorDto })
  update(@Param('id') id: string, @InjectUser() updateUlasanMotorDto: UpdateUlasanMotorDto) {
    return this.ulasanMotorService.update(id, updateUlasanMotorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ulasanMotorService.remove(id);
  }
}
