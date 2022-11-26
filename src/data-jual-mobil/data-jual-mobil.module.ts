import { Module } from '@nestjs/common';
import { DataJualMobilService } from './data-jual-mobil.service';
import { DataJualMobilController } from './data-jual-mobil.controller';
import { DataJualMobil } from './entities/data-jual-mobil.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DokumenMobil } from './entities/data-dokumen-mobil.entity';
import { GaleriMobil } from './entities/data-galeri-mobil.entity';
import { FileService } from 'src/file/file.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([DataJualMobil, DokumenMobil, GaleriMobil])
  ],
  controllers: [DataJualMobilController],
  providers: [DataJualMobilService, FileService],
  exports: [DataJualMobilService]
})
export class DataJualMobilModule { }
