import { Optional } from "@nestjs/common"
import { ApiProperty, OmitType, PickType } from "@nestjs/swagger"
import { IsObject, IsString } from "class-validator"
import { UserDto } from "src/user/dto/create-user.dto"

export class KomentarProdukMotorDto {
    @ApiProperty()
    @Optional()
    id: string

    @ApiProperty()
    @IsString()
    komentar: string

    @IsObject()
    user: UserDto

    @ApiProperty()
    @IsString()
    jualMotorId: string
}

export class CreateKomentarProdukMotorDto extends OmitType(KomentarProdukMotorDto, ['id']) { }
export class KomentarProdukMotorIdDto extends PickType(KomentarProdukMotorDto, ['id']) { }