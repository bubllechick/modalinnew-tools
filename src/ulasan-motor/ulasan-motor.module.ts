import { Module } from '@nestjs/common';
import { UlasanMotorService } from './ulasan-motor.service';
import { UlasanMotorController } from './ulasan-motor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UlasanMotor } from './entities/ulasan-motor.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UlasanMotor])
  ],
  controllers: [UlasanMotorController],
  providers: [UlasanMotorService]
})
export class UlasanMotorModule { }
