import { Module } from '@nestjs/common';
import { DataJualMotorService } from './data-jual-motor.service';
import { DataJualMotorController } from './data-jual-motor.controller';
import { DataJualMotor } from './entities/data-jual-motor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DokumenMotor } from './entities/data-dokumen.entity';
import { GaleriMotor } from './entities/data-galeri.entity';
import { FileService } from 'src/file/file.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([DataJualMotor, DokumenMotor, GaleriMotor])
  ],
  controllers: [DataJualMotorController],
  providers: [DataJualMotorService, FileService],
  exports: [DataJualMotorService]
})
export class DataJualMotorModule { }
