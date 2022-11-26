import { PartialType } from '@nestjs/swagger';
import { KomunitaDto } from './create-komunita.dto';

export class UpdateKomunitaDto extends PartialType(KomunitaDto) { }
