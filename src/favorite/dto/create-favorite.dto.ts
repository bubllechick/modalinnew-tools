import { ApiProperty, OmitType } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsObject, IsOptional, IsString, ValidateNested } from "class-validator";
import { UserDto } from "src/user/dto/create-user.dto";

// export class FavoriteMotor {
//     @ApiProperty()
//     @IsOptional()
//     id: string

//     @ApiProperty()
//     @IsString()
//     motor_id: string
// }

// export class FavoriteMobil {
//     @ApiProperty()
//     @IsOptional()
//     id: string

//     @ApiProperty()
//     @IsString()
//     motor_id: string
// }

export class FavoriteMobilDto {
    @ApiProperty()
    @IsOptional()
    id: string

    @ApiProperty({ default: '' })
    @IsOptional()
    jualMobil: string

    @IsObject()
    user: UserDto
}
export class CreateFavoriteMobilDto extends OmitType(FavoriteMobilDto, ['id']) { }


export class FavoriteMotorDto {
    @ApiProperty()
    @IsOptional()
    id: string

    @ApiProperty({ default: '' })
    @IsOptional()
    jualMotor: string

    @IsObject()
    user: UserDto
}
export class CreateFavoriteMotorDto extends OmitType(FavoriteMotorDto, ['id']) { }

