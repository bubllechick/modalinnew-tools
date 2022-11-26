import { ApiProperty, OmitType, PickType } from "@nestjs/swagger"
import { IsObject, IsOptional, IsString } from "class-validator"
import { UserDto } from "src/user/dto/create-user.dto"

export class KreditDto {
    @ApiProperty()
    @IsOptional()
    id: string

    @ApiProperty()
    @IsString()
    leasing: string

    @ApiProperty()
    @IsString()
    jenis_angsuran: string

    @ApiProperty()
    @IsString()
    asuransi: string

    @ApiProperty()
    @IsString()
    dp: string

    @ApiProperty()
    @IsString()
    tenor: string

    @ApiProperty()
    @IsString()
    no_hp: string

    @IsObject()
    user: UserDto
}
export class CreateKreditDto extends OmitType(KreditDto, ['id']) { }
export class KreditIdDto extends PickType(KreditDto, ['id']) { }
