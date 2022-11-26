import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { JualMobilService } from './jual-mobil.service';
import { CreateJualMobilDto } from './dto/create-jual-mobil.dto';
import { UpdateJualMobilDto } from './dto/update-jual-mobil.dto';
import { InjectUser } from 'src/etc/decorator/inject-user.decorator';
import { JwtGuard } from 'src/auth/jwt.guard';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('Jual-mobil')
@Controller('jual-mobil')
export class JualMobilController {
  constructor(private readonly jualMobilService: JualMobilService) { }

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiBody({ type: CreateJualMobilDto })
  create(@InjectUser() createJualMobilDto: CreateJualMobilDto) {
    console.log(createJualMobilDto)
    return this.jualMobilService.create(createJualMobilDto);
  }

  @Get()
  findAll() {
    return this.jualMobilService.findAll();
  }

  @Get('get-all-new')
  findAllBaru() {
    return this.jualMobilService.findAllBaru();
  }

  @Get('get-all-second')
  findAllBekas() {
    return this.jualMobilService.findAllBekas();
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  findOne(@Param('id') id: string) {
    return this.jualMobilService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiBody({ type: UpdateJualMobilDto })
  update(@Param('id') id: string, @InjectUser() updateJualMobilDto: UpdateJualMobilDto) {
    return this.jualMobilService.update(id, updateJualMobilDto);
  }

  @Put(':search')
  async search(@Param('search') search: string) {
    return await this.jualMobilService.findSearch(search);
  }

  @Delete(':id')
  // @ApiBearerAuth()
  // @UseGuards(JwtGuard)
  remove(@Param('id') id: string) {
    return this.jualMobilService.remove(id);
  }
}
