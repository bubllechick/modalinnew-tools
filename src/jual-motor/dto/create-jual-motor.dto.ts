import { ApiProperty, OmitType, PickType } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { ArrayMinSize, IsObject, IsOptional, IsString, ValidateNested } from "class-validator"
import { UserDto } from "src/user/dto/create-user.dto"

export class DeskripsiMotor {
    @ApiProperty({ default: '', required: false })
    @IsString()
    id: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    tipe_mesin: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    cc: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    sistem_pembakaran: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    diameter_langkah: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    jumlah_silinder: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    tipe_transmisi: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    rasio_kompresi: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    daya_maksimum: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    torsi_maksimum: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    tipe_stater: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    tipe_kopling: string

}

export class CreateDeskripsiMotor extends OmitType(DeskripsiMotor, ['id']) { }

export class JualMotorDto {
    @ApiProperty({ default: '', required: false })
    @IsOptional()
    id: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    merek_motor: string

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

    @IsObject()
    user: UserDto

    @ApiProperty({ default: '', required: false })
    @IsString()
    deskripsi: string

    // @ApiProperty({ isArray: true, type: CreateDeskripsiMotor })
    // @Type(() => CreateDeskripsiMotor)
    // @ValidateNested({ each: true })
    // deskripsi: CreateDeskripsiMotor[];
}

// export class CreateJua
export class CreateJualMotorDto extends OmitType(JualMotorDto, ['id']) { }
export class JualMotorIdDto extends PickType(JualMotorDto, ['id']) { }
