import { Optional } from "@nestjs/common"
import { ApiProperty, OmitType, PickType } from "@nestjs/swagger"
import { IsNumber, IsOptional, IsString } from "class-validator"
import { PageRequestDto } from "src/etc/dto/page-dto"
import { JualMobilDto } from "src/jual-mobil/dto/create-jual-mobil.dto"

export class UserDto {
    @ApiProperty({ default: '', required: false })
    @Optional()
    id?: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    nama: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    no_hp: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    address: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    desc: string

    @Optional()
    code: number

    @ApiProperty({ default: '', required: false })
    @IsString()
    role: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    foto: string
}

export class CreateUserDto extends OmitType(UserDto, ['id']) { }
export class UserIdDto extends PickType(UserDto, ['id']) { }
export class FindClass extends PageRequestDto {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    title_class: string

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    description_class: string
}

export class ResponseClassDto extends PageRequestDto {
    @ApiProperty({ type: [JualMobilDto] })
    data: JualMobilDto[]
}