import { ApiProperty, OmitType, PickType } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsObject, IsOptional, IsString, ValidateNested } from "class-validator"
import { JualMotorIdDto } from "src/jual-motor/dto/create-jual-motor.dto"

export class Galeri {
    @ApiProperty({ format: 'binary' })
    @IsOptional()
    galeri1: string
    @ApiProperty({ format: 'binary' })
    @IsOptional()
    galeri2: string
    @ApiProperty({ format: 'binary' })
    @IsOptional()
    galeri3: string
    @ApiProperty({ format: 'binary' })
    @IsOptional()
    galeri4: string
    @ApiProperty({ format: 'binary' })
    @IsOptional()
    galeri5: string
    @ApiProperty({ format: 'binary' })
    @IsOptional()
    galeri6: string
    @ApiProperty({ format: 'binary' })
    @IsOptional()
    galeri7: string
    @ApiProperty({ format: 'binary' })
    @IsOptional()
    galeri8: string
}

export class Dokumen {
    @ApiProperty()
    @IsString()
    stkn_depan: string
    @ApiProperty()
    @IsString()
    stkn_belakang: string
    @ApiProperty()
    @IsString()
    buku_manual: string
    @ApiProperty()
    @IsString()
    buku_service: string
    @ApiProperty()
    @IsString()
    kunci_cadangan: string
    @ApiProperty()
    @IsString()
    bpkb: string
}

export class DataJualMotorDto {
    @ApiProperty()
    @IsOptional()
    id?: string

    @ApiProperty({ isArray: true, type: Dokumen })
    @Type(() => Dokumen)
    @ValidateNested({ each: true })
    dokumen: Dokumen[];

    @ApiProperty({ isArray: true, type: Galeri })
    @Type(() => Galeri)
    @ValidateNested({ each: true })
    galeri: Galeri[];

    @ApiProperty()
    @IsString()
    jualmotorId: string
}
export class CreateDataJualMotorDto extends OmitType(DataJualMotorDto, ['id']) { }
export class DataJualMotorIdDto extends PickType(DataJualMotorDto, ['id']) { }






    // @ApiProperty({ format: 'binary' })
    // @IsOptional()
    // galeri1: string
    // @ApiProperty({ format: 'binary' })
    // @IsOptional()
    // galeri2: string
    // @ApiProperty({ format: 'binary' })
    // @IsOptional()
    // galeri3: string
    // @ApiProperty({ format: 'binary' })
    // @IsOptional()
    // galeri4: string
    // @ApiProperty({ format: 'binary' })
    // @IsOptional()
    // galeri5: string
    // @ApiProperty({ format: 'binary' })
    // @IsOptional()
    // galeri6: string
    // @ApiProperty({ format: 'binary' })
    // @IsOptional()
    // galeri7: string
    // @ApiProperty({ format: 'binary' })
    // @IsOptional()
    // galeri8: string

    // @ApiProperty()
    // @IsString()
    // stkn_depan: string
    // @ApiProperty()
    // @IsString()
    // stkn_belakang: string
    // @ApiProperty()
    // @IsString()
    // buku_manual: string
    // @ApiProperty()
    // @IsString()
    // buku_service: string
    // @ApiProperty()
    // @IsString()
    // kunci_cadangan: string
    // @ApiProperty()
    // @IsString()
    // bpkb: string