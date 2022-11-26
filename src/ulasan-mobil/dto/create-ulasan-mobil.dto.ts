import { Optional } from "@nestjs/common"
import { ApiProperty, OmitType, PickType } from "@nestjs/swagger"
import { IsObject, IsString } from "class-validator"
import { UserDto } from "src/user/dto/create-user.dto"

export class UlasanMobilDto {
    @ApiProperty()
    @Optional()
    id: string

    @ApiProperty()
    @IsString()
    rating: string

    @IsObject()
    user: UserDto

    @ApiProperty()
    @IsString()
    jualMobil: string
}
export class CreateUlasanMobilDto extends OmitType(UlasanMobilDto, ['id']) { }
export class UlasanMobilIdDto extends PickType(UlasanMobilDto, ['id']) { }