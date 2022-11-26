import { Optional } from "@nestjs/common"
import { ApiProperty, OmitType, PickType } from "@nestjs/swagger"
import { IsObject, IsString } from "class-validator"
import { User } from "src/user/entities/user.entity"

export class KomunitaDto {
    @ApiProperty()
    @Optional()
    id: string

    @ApiProperty()
    @IsString()
    chat: string

    @IsObject()
    user: User

    // @ApiProperty()
    // @IsString()
    // user2: User
}

export class CreateKomunitaDto extends OmitType(KomunitaDto, ['id']) { }
export class KomunitaIdDto extends PickType(KomunitaDto, ['id']) { }
