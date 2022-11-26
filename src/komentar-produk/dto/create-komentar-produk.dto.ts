import { Optional } from "@nestjs/common"
import { ApiProperty, OmitType, PickType } from "@nestjs/swagger"
import { IsObject, IsString } from "class-validator"
import { UserDto } from "src/user/dto/create-user.dto"

export class KomentarProdukDto {
    @ApiProperty()
    @Optional()
    id?: string

    @ApiProperty()
    @IsString()
    komentar: string

    @ApiProperty()
    @IsString()
    jualMobilId: string

    @IsObject()
    user: UserDto

}
export class CreateKomentarProdukDto extends OmitType(KomentarProdukDto, ['id']) { }

export class KomentarProdukIdDto extends PickType(KomentarProdukDto, ['id']) { }