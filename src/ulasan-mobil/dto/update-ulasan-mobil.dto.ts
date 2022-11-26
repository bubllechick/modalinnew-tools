import { PartialType } from '@nestjs/swagger';
import { UlasanMobilDto } from './create-ulasan-mobil.dto';

export class UpdateUlasanMobilDto extends PartialType(UlasanMobilDto) { }
