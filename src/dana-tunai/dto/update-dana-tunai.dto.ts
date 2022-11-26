import { PartialType } from '@nestjs/swagger';
import { DanaTunaiDto } from './create-dana-tunai.dto';

export class UpdateDanaTunaiDto extends PartialType(DanaTunaiDto) { }
