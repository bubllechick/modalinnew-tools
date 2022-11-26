import { ApiProperty, OmitType, PickType } from "@nestjs/swagger"
import { IsObject, IsOptional, IsString } from "class-validator"
import { UserDto } from "src/user/dto/create-user.dto"

export class DanaTunaiDto {
    @ApiProperty()
    @IsOptional()
    id: string

    @ApiProperty()
    @IsString()
    nama_lengkap: string

    @ApiProperty()
    @IsString()
    email: string

    @ApiProperty()
    @IsString()
    alamat: string

    @ApiProperty()
    @IsString()
    jaminan: string

    @ApiProperty()
    @IsString()
    jenis_jaminan: string

    @ApiProperty()
    @IsString()
    bpkb_atas_nama: string

    @ApiProperty()
    @IsString()
    no_telp: string

    @ApiProperty()
    @IsString()
    merek: string

    @ApiProperty()
    @IsString()
    model: string

    @ApiProperty()
    @IsString()
    no_polisi: string

    @ApiProperty()
    @IsString()
    jarak_tempuh: string

    @ApiProperty()
    @IsString()
    tipe: string

    @ApiProperty()
    @IsString()
    tahun_kendaraan: string

    @ApiProperty()
    @IsString()
    warna: string

    @IsObject()
    user: UserDto
}

export class CreateDanaTunaiDto extends OmitType(DanaTunaiDto, ['id']) { }
export class DanaTunaiIdDto extends PickType(DanaTunaiDto, ['id']) { }
