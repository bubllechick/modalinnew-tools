import { ApiProperty, PartialType } from '@nestjs/swagger';
import { DeskripsiMotor, JualMotorDto } from './create-jual-motor.dto';

export class DeskripsiMotorUpdate extends PartialType(DeskripsiMotor) { }

export class UpdateJualMotorDto extends PartialType(JualMotorDto) { }

// export class UpdateJualMotorDto {
//     @ApiProperty()
//     @IsOptional()
//     id: string

//     @ApiProperty()
//     @IsString()
//     merek_motor: string

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

//     @ApiProperty({ isArray: true, type: DeskripsiMotorUpdate })
//     @Type(() => DeskripsiMotorUpdate)
//     @ValidateNested({ each: true })
//     deskripsi: DeskripsiMotorUpdate[];
// }
