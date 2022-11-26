import { PartialType } from '@nestjs/swagger';
import { KomentarProdukMotorDto } from './create-komentar-produk-motor.dto';

export class UpdateKomentarProdukMotorDto extends PartialType(KomentarProdukMotorDto) { }
