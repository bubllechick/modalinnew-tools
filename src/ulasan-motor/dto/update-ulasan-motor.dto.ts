import { PartialType } from '@nestjs/swagger';
import { UlasanMotorDto } from './create-ulasan-motor.dto';

export class UpdateUlasanMotorDto extends PartialType(UlasanMotorDto) { }
