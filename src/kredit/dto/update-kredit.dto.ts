import { PartialType } from '@nestjs/swagger';
import { KreditDto } from './create-kredit.dto';

export class UpdateKreditDto extends PartialType(KreditDto) { }
