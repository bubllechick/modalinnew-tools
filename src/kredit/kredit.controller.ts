import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { KreditService } from './kredit.service';
import { CreateKreditDto } from './dto/create-kredit.dto';
import { UpdateKreditDto } from './dto/update-kredit.dto';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { InjectUser } from 'src/etc/decorator/inject-user.decorator';
import { JwtGuard } from 'src/auth/jwt.guard';


@ApiTags('kredit')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('kredit')
export class KreditController {
  constructor(private readonly kreditService: KreditService) { }

  @Post()
  @ApiBody({ type: CreateKreditDto })
  create(@InjectUser() createKreditDto: CreateKreditDto) {
    return this.kreditService.create(createKreditDto);
  }

  @Get()
  findAll() {
    return this.kreditService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kreditService.findOne(id);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateKreditDto })
  update(@Param('id') id: string, @InjectUser() updateKreditDto: UpdateKreditDto) {
    return this.kreditService.update(id, updateKreditDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kreditService.remove(id);
  }
}
