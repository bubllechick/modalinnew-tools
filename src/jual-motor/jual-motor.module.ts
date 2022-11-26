import { Module } from '@nestjs/common';
import { JualMotorService } from './jual-motor.service';
import { JualMotorController } from './jual-motor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JualMotor } from './entities/jual-motor.entity';
import { DeskripsiMotor } from './entities/deskripsi-motor.entity';
import { DataJualMotorModule } from 'src/data-jual-motor/data-jual-motor.module';

@Module({
  imports: [
    DataJualMotorModule,
    TypeOrmModule.forFeature([JualMotor, DeskripsiMotor])
  ],
  controllers: [JualMotorController],
  providers: [JualMotorService],
  exports: [JualMotorService]
})
export class JualMotorModule { }
