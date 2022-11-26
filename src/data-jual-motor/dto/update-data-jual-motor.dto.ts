import { PartialType } from '@nestjs/swagger';
import { DataJualMotorDto } from './create-data-jual-motor.dto';

export class UpdateDataJualMotorDto extends PartialType(DataJualMotorDto) { }
