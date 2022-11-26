import { Optional } from "@nestjs/common"
import { ApiProperty, OmitType } from "@nestjs/swagger"
import { IsObject, IsString } from "class-validator"
import { UserDto } from "src/user/dto/create-user.dto"


export class LayananBengkelDto {
    @ApiProperty({ default: '', required: false })
    @Optional()
    id?: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    foto: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    judul: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    desc: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    price: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    kategori: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    bengkeldetail_id: string

    // @IsObject()
    // user: UserDto
}
export class CreateLayananBengkelDto extends OmitType(LayananBengkelDto, ['id']) { }

export class BannerBengkelDto {
    @ApiProperty()
    @Optional()
    id?: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    foto: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    bengkeldetail_id: string

    // @IsObject()
    // user: UserDto
}

export class CreateBannerBengkelDto extends OmitType(BannerBengkelDto, ['id']) { }

export class DetailBengkelDto {
    @ApiProperty({ default: '', required: false })
    @Optional()
    id?: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    foto: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    latitude: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    longitude: string

    @IsObject()
    user: UserDto
}

export class CreateDetailBengkelDto extends OmitType(DetailBengkelDto, ['id']) { }

export class RatingBengkel {
    @ApiProperty()
    @Optional()
    id: string

    @ApiProperty({ default: '', required: false })
    @IsString()
    bengkel_id: string

    @IsObject()
    user: UserDto
}

export class CreateRating extends OmitType(RatingBengkel, ['id']) { }