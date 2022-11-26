import { Optional } from "@nestjs/common"
import { ApiProperty, OmitType, PickType } from "@nestjs/swagger"
import { IsObject, IsString } from "class-validator"
import { UserDto } from "src/user/dto/create-user.dto"

export class UlasanMotorDto {
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
    jualMotor: string
}
export class CreateUlasanMotorDto extends OmitType(UlasanMotorDto, ['id']) { }
export class UlasanMotorIdDto extends PickType(UlasanMotorDto, ['id']) { }