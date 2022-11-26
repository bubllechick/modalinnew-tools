import { ApiProperty, OmitType, PickType } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsObject, IsOptional, IsString, ValidateNested } from "class-validator"
import { UserDto } from "src/user/dto/create-user.dto"

// export class DeskripsiMobil {
//     @ApiProperty()
//     @IsOptional()
//     id: string

//     @ApiProperty()
//     @IsString()
//     cc: string

//     @ApiProperty()
//     @IsString()
//     diameter_pistion: string

//     @ApiProperty()
//     @IsString()
//     langkah_mesin: string

//     @ApiProperty()
//     @IsString()
//     jumlah_silinder: string

//     @ApiProperty()
//     @IsString()
//     tipe_mesin: string

//     @ApiProperty()
//     @IsString()
//     toris_maksimum: string

//     @ApiProperty()
//     @IsString()
//     type: string

//     @ApiProperty()
//     @IsString()
//     sistem_pendinginan: string

//     @ApiProperty()
//     @IsString()
//     sistem_pembakaran: string
// }

// export class CreateDeskripsiMobil extends OmitType(DeskripsiMobil, ['id']) { }

export class JualMobilDto {
    @ApiProperty({ default: '', required: false })
    @IsOptional()
    id: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    merek_mobil: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    model: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    no_polisi: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    jarak_tempuh: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    tipe: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    tahun_kendaraan: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    warna: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    lokasi: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    harga: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    kondisi: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    deskripsi: string

    @IsObject()
    user: UserDto

    // @ApiProperty({ isArray: true, type: CreateDeskripsiMobil })
    // @Type(() => CreateDeskripsiMobil)
    // @ValidateNested({ each: true })
    // deskripsi: CreateDeskripsiMobil[];
}
export class CreateJualMobilDto extends OmitType(JualMobilDto, ['id']) { }
export class JualMobilIdDto extends PickType(JualMobilDto, ['id']) { }