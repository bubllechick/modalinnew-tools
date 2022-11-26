import { Module } from '@nestjs/common';
import { JualMobilService } from './jual-mobil.service';
import { JualMobilController } from './jual-mobil.controller';
import { JualMobil } from './entities/jual-mobil.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeskripsiMobil } from './entities/deskripsi-mobil.entity';
import { DataJualMobilModule } from 'src/data-jual-mobil/data-jual-mobil.module';

@Module({
  imports: [
    DataJualMobilModule,
    TypeOrmModule.forFeature([JualMobil, DeskripsiMobil])
  ],
  controllers: [JualMobilController],
  providers: [JualMobilService],
  exports: [JualMobilService]
})
export class JualMobilModule { }
