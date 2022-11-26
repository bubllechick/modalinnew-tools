import { ApiProperty, OmitType, PickType } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsOptional, IsString, ValidateNested } from "class-validator"


export class Interior {
    @ApiProperty({ format: 'binary' })
    @IsOptional()
    interior1: string
    @ApiProperty({ format: 'binary' })
    @IsOptional()
    interior2: string
    @ApiProperty({ format: 'binary' })
    @IsOptional()
    interior3: string
    @ApiProperty({ format: 'binary' })
    @IsOptional()
    interior4: string
    @ApiProperty({ format: 'binary' })
    @IsOptional()
    interior5: string
    @ApiProperty({ format: 'binary' })
    @IsOptional()
    interior6: string
    @ApiProperty({ format: 'binary' })
    @IsOptional()
    interior7: string
    @ApiProperty({ format: 'binary' })
    @IsOptional()
    interior8: string
}
export class Eksterior {
    @ApiProperty({ format: 'binary' })
    @IsOptional()
    eksterior1: string
    @ApiProperty({ format: 'binary' })
    @IsOptional()
    eksterior2: string
    @ApiProperty({ format: 'binary' })
    @IsOptional()
    eksterior3: string
    @ApiProperty({ format: 'binary' })
    @IsOptional()
    eksterior4: string
    @ApiProperty({ format: 'binary' })
    @IsOptional()
    eksterior5: string
    @ApiProperty({ format: 'binary' })
    @IsOptional()
    eksterior6: string
    @ApiProperty({ format: 'binary' })
    @IsOptional()
    eksterior7: string
    @ApiProperty({ format: 'binary' })
    @IsOptional()
    eksterior8: string
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

export class DataJualMobilDto {
    @ApiProperty()
    @IsOptional()
    id: string

    @ApiProperty({ isArray: true, type: Dokumen })
    @Type(() => Dokumen)
    @ValidateNested({ each: true })
    dokumen: Dokumen[];

    @ApiProperty({ isArray: true, type: Eksterior })
    @Type(() => Eksterior)
    @ValidateNested({ each: true })
    eksterior: Eksterior[];

    // @ApiProperty({ isArray: true, type: Interior })
    // @Type(() => Interior)
    // @ValidateNested({ each: true })
    // interior: Interior[];

    @ApiProperty()
    @IsString()
    jualmobilId: string
}
export class CreateDataJualMobilDto extends OmitType(DataJualMobilDto, ['id']) { }
export class DataJualMobilIdDto extends PickType(DataJualMobilDto, ['id']) { }




    // @ApiProperty({ format: 'binary' })
    // @IsOptional()
    // eksterior1: string
    // @ApiProperty({ format: 'binary' })
    // @IsOptional()
    // eksterior2: string
    // @ApiProperty({ format: 'binary' })
    // @IsOptional()
    // eksterior3: string
    // @ApiProperty({ format: 'binary' })
    // @IsOptional()
    // eksterior4: string
    // @ApiProperty({ format: 'binary' })
    // @IsOptional()
    // eksterior5: string
    // @ApiProperty({ format: 'binary' })
    // @IsOptional()
    // eksterior6: string
    // @ApiProperty({ format: 'binary' })
    // @IsOptional()
    // eksterior7: string
    // @ApiProperty({ format: 'binary' })
    // @IsOptional()
    // eksterior8: string

    // @ApiProperty({ format: 'binary' })
    // @IsOptional()
    // interior1: string
    // @ApiProperty({ format: 'binary' })
    // @IsOptional()
    // interior2: string
    // @ApiProperty({ format: 'binary' })
    // @IsOptional()
    // interior3: string
    // @ApiProperty({ format: 'binary' })
    // @IsOptional()
    // interior4: string
    // @ApiProperty({ format: 'binary' })
    // @IsOptional()
    // interior5: string
    // @ApiProperty({ format: 'binary' })
    // @IsOptional()
    // interior6: string
    // @ApiProperty({ format: 'binary' })
    // @IsOptional()
    // interior7: string
    // @ApiProperty({ format: 'binary' })
    // @IsOptional()
    // interior8: string

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