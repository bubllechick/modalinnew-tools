import { PartialType } from '@nestjs/swagger';
import { KomentarProdukDto } from './create-komentar-produk.dto';

export class UpdateKomentarProdukDto extends PartialType(KomentarProdukDto) { }
