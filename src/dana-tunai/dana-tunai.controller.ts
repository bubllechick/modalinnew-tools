import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/jwt.guard';
import { InjectUser } from 'src/etc/decorator/inject-user.decorator';
import { DanaTunaiService } from './dana-tunai.service';
import { CreateDanaTunaiDto } from './dto/create-dana-tunai.dto';
import { UpdateDanaTunaiDto } from './dto/update-dana-tunai.dto';

@ApiTags('dana-tunai')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('dana-tunai')
export class DanaTunaiController {
  constructor(private readonly danaTunaiService: DanaTunaiService) { }

  @Post()
  @ApiBody({ type: CreateDanaTunaiDto })
  create(@InjectUser() createDanaTunaiDto: CreateDanaTunaiDto) {
    return this.danaTunaiService.create(createDanaTunaiDto);
  }

  @Get()
  findAll() {
    return this.danaTunaiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.danaTunaiService.findOne(id);
  }

  @Patch(':id')
  @ApiBody({ type: CreateDanaTunaiDto })
  update(@Param('id') id: string, @InjectUser() updateDanaTunaiDto: UpdateDanaTunaiDto) {
    return this.danaTunaiService.update(id, updateDanaTunaiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.danaTunaiService.remove(id);
  }
}
