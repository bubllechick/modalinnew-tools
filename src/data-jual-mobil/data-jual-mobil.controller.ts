import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/jwt.guard';
import { DataJualMobilService } from './data-jual-mobil.service';
import { CreateDataJualMobilDto } from './dto/create-data-jual-mobil.dto';
import { UpdateDataJualMobilDto } from './dto/update-data-jual-mobil.dto';

@ApiTags('data-jual-mobil')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('data-jual-mobil')
export class DataJualMobilController {
  constructor(private readonly dataJualMobilService: DataJualMobilService) { }

  @Post()
  async create(@Body() dto: CreateDataJualMobilDto) {
    return this.dataJualMobilService.create(dto);
  }

  @Get()
  findAll() {
    return this.dataJualMobilService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dataJualMobilService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateDataJualMobilDto) {
    return this.dataJualMobilService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dataJualMobilService.remove(id);
  }
}



    // dto.eksterior1 = await this.dataJualMobilService.convertToFile(dto.eksterior1)
    // dto.eksterior2 = await this.dataJualMobilService.convertToFile(dto.eksterior2)
    // dto.eksterior3 = await this.dataJualMobilService.convertToFile(dto.eksterior3)
    // dto.eksterior4 = await this.dataJualMobilService.convertToFile(dto.eksterior4)
    // dto.eksterior5 = await this.dataJualMobilService.convertToFile(dto.eksterior5)
    // dto.eksterior6 = await this.dataJualMobilService.convertToFile(dto.eksterior6)
    // dto.eksterior7 = await this.dataJualMobilService.convertToFile(dto.eksterior7)
    // dto.eksterior8 = await this.dataJualMobilService.convertToFile(dto.eksterior8)

    // dto.interior1 = await this.dataJualMobilService.convertToFile(dto.interior1)
    // dto.interior2 = await this.dataJualMobilService.convertToFile(dto.interior2)
    // dto.interior3 = await this.dataJualMobilService.convertToFile(dto.interior3)
    // dto.interior4 = await this.dataJualMobilService.convertToFile(dto.interior4)
    // dto.interior5 = await this.dataJualMobilService.convertToFile(dto.interior5)
    // dto.interior6 = await this.dataJualMobilService.convertToFile(dto.interior6)
    // dto.interior7 = await this.dataJualMobilService.convertToFile(dto.interior7)
    // dto.interior8 = await this.dataJualMobilService.convertToFile(dto.interior8)

    // dto.stkn_depan = await this.dataJualMobilService.convertToFile(dto.stkn_depan)
    // dto.stkn_belakang = await this.dataJualMobilService.convertToFile(dto.stkn_belakang)
    // dto.bpkb = await this.dataJualMobilService.convertToFile(dto.bpkb)
    // dto.buku_manual = await this.dataJualMobilService.convertToFile(dto.buku_manual)
    // dto.buku_service = await this.dataJualMobilService.convertToFile(dto.buku_service)
    // dto.kunci_cadangan = await this.dataJualMobilService.convertToFile(dto.kunci_cadangan)


    // dto.eksterior1 = await this.dataJualMobilService.convertToFile(dto.eksterior1)
    // dto.eksterior2 = await this.dataJualMobilService.convertToFile(dto.eksterior2)
    // dto.eksterior3 = await this.dataJualMobilService.convertToFile(dto.eksterior3)
    // dto.eksterior4 = await this.dataJualMobilService.convertToFile(dto.eksterior4)
    // dto.eksterior5 = await this.dataJualMobilService.convertToFile(dto.eksterior5)
    // dto.eksterior6 = await this.dataJualMobilService.convertToFile(dto.eksterior6)
    // dto.eksterior7 = await this.dataJualMobilService.convertToFile(dto.eksterior7)
    // dto.eksterior8 = await this.dataJualMobilService.convertToFile(dto.eksterior8)

    // dto.interior1 = await this.dataJualMobilService.convertToFile(dto.interior1)
    // dto.interior2 = await this.dataJualMobilService.convertToFile(dto.interior2)
    // dto.interior3 = await this.dataJualMobilService.convertToFile(dto.interior3)
    // dto.interior4 = await this.dataJualMobilService.convertToFile(dto.interior4)
    // dto.interior5 = await this.dataJualMobilService.convertToFile(dto.interior5)
    // dto.interior6 = await this.dataJualMobilService.convertToFile(dto.interior6)
    // dto.interior7 = await this.dataJualMobilService.convertToFile(dto.interior7)
    // dto.interior8 = await this.dataJualMobilService.convertToFile(dto.interior8)

    // dto.stkn_depan = await this.dataJualMobilService.convertToFile(dto.stkn_depan)
    // dto.stkn_belakang = await this.dataJualMobilService.convertToFile(dto.stkn_belakang)
    // dto.bpkb = await this.dataJualMobilService.convertToFile(dto.bpkb)
    // dto.buku_manual = await this.dataJualMobilService.convertToFile(dto.buku_manual)
    // dto.buku_service = await this.dataJualMobilService.convertToFile(dto.buku_service)
    // dto.kunci_cadangan = await this.dataJualMobilService.convertToFile(dto.kunci_cadangan)