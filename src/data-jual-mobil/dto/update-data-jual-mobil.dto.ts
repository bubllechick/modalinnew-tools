import { PartialType } from '@nestjs/swagger';
import { DataJualMobilDto } from './create-data-jual-mobil.dto';

export class UpdateDataJualMobilDto extends PartialType(DataJualMobilDto) { }
