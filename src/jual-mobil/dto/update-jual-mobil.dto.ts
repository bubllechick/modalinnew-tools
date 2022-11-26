import { PartialType } from '@nestjs/swagger';
import { JualMobilDto } from './create-jual-mobil.dto';

// export class DeskripsiMobilUpdate extends PartialType(DeskripsiMobil) { }
export class UpdateJualMobilDto extends PartialType(JualMobilDto) { }


// export class UpdateJualMobilDto {
//     @ApiProperty()
//     @IsOptional()
//     id: string

//     @ApiProperty()
//     @IsString()
//     merek_mobil: string

//     @ApiProperty()
//     @IsString()
//     model: string

//     @ApiProperty()
//     @IsString()
//     no_polisi: string

//     @ApiProperty()
//     @IsString()
//     jarak_tempuh: string

//     @ApiProperty()
//     @IsString()
//     tipe: string

//     @ApiProperty()
//     @IsString()
//     tahun_kendaraan: string

//     @ApiProperty()
//     @IsString()
//     warna: string

//     @ApiProperty()
//     @IsString()
//     lokasi: string

//     @ApiProperty()
//     @IsString()
//     harga: string

//     @ApiProperty()
//     @IsString()
//     kondisi: string

//     @IsObject()
//     user: UserDto

//     @ApiProperty({ isArray: true, type: DeskripsiMobil })
//     @Type(() => DeskripsiMobil)
//     @ValidateNested({ each: true })
//     deskripsi: DeskripsiMobil[];
// }
