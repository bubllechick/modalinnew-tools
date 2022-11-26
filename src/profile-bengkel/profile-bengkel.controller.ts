import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put, Request } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/jwt.guard';
import { InjectUser } from 'src/etc/decorator/inject-user.decorator';
import { CreateDetailBengkelDto, CreateLayananBengkelDto, CreateRating, DetailBengkelDto, LayananBengkelDto } from './dto/bengkel.dto';
import { ProfileBengkelService } from './profile-bengkel.service';

@ApiTags('profile-bengkel')
@Controller('profile-bengkel')
export class ProfileBengkelController {
  constructor(
    private readonly profileBengkelService: UserService,
    private readonly bengkelService: ProfileBengkelService,
    private readonly userService: UserService
  ) { }

  @Put('/id-user')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  async userToBengkel(@InjectUser() id: string) {
    return await this.profileBengkelService.updateToBengkel(id);
  }

  @Post('/detail-bengkel')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiBody({ type: CreateDetailBengkelDto })
  async detail_bengkel(@InjectUser() dto: CreateDetailBengkelDto) {
    return await this.bengkelService.saveDetailBengkel(dto);
  }

  @Patch('/detail-bengkel/:id')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiBody({ type: DetailBengkelDto })
  async update_detail_bengkel(@Param('id') id: string, @InjectUser() dto: DetailBengkelDto) {
    return await this.bengkelService.updateDetailBengkel(id, dto);
  }

  @Post('/layanan-bengkel')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  async profile_bengkel(@Body() dto: CreateLayananBengkelDto) {
    return await this.bengkelService.saveLayananBengkel(dto);
  }



  @Patch('/layanan-bengkel/:id')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  async update_profile_bengkel(@Param('id') id: string, @Body() dto: LayananBengkelDto) {
    return await this.bengkelService.updateLayananBengkel(id, dto);
  }

  @Delete('/detail-bengkel/:id')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  remove(@Param('id') id: string) {
    return this.bengkelService.removeDetailBengkel(id);
  }

  @Get()
  // @ApiBearerAuth()
  // @UseGuards(JwtGuard)
  findAll() {
    return this.bengkelService.getallbengkel();
  }

  @Get('get-profile-by-user-login')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  async get_profile_by_login(@Request() req) {
    console.log(req.user.id);
    const id = req.user.id;
    const data = await this.userService.findOneBengkel(id);
    console.log(data);
    return data;
  }

  @Put(':search/search-layanan-bengkel')
  async search(@Param('search') search: string) {
    return await this.bengkelService.findSearch(search);
  }

  @Put('rating-bengkel')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiBody({ type: CreateRating })
  async rating(@InjectUser() dto: CreateRating) {
    return await this.bengkelService.addRating(dto);
  }

  @Get('get-layanan-bengkel')
  getAllLayanan(){
    return this.bengkelService.getAllLayanan();
  }

}

  // @Patch('/banner-bengkel/:id')
  // @ApiBearerAuth()
  // @UseGuards(JwtGuard)
  // async update_bengkel_banner(@Param('id') id: string, @Body() dto: BannerBengkelDto) {
  //   return await this.bengkelService.updateSaveBanner(id, dto);
  // }

    // @Post('/banner-bengkel')
  // @ApiBearerAuth()
  // @UseGuards(JwtGuard)
  // async bengkel_banner(@Body() dto: CreateBannerBengkelDto) {
  //   return await this.bengkelService.saveBanner(dto);
  // }

  // @Get(':id')
  // @ApiBearerAuth()
  // @UseGuards(JwtGuard)
  // findOne(@Param('id') id: string) {
  //   return this.profileBengkelService.findOne(id);
  // }

  // @Delete(':id')
  // @ApiBearerAuth()
  // @UseGuards(JwtGuard)
  // remove(@Param('id') id: string) {
  //   return this.profileBengkelService.remove(id);
  // }

  // @Patch(':id')
  // @ApiBearerAuth()
  // @UseGuards(JwtGuard)
  // async update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
  //   dto.id = id
  //   const f = await this.profileBengkelService.convertToFile(dto.foto)
  //   let val = Math.floor(1000 + Math.random() * 900000);
  //   // console.log(val.countDecimals)
  //   dto.code = val
  //   dto.foto = f
  //   const role = 'bengkel';
  //   dto.role = role
  //   let valid = await this.profileBengkelService.update(id, dto);
  //   if (valid) {
  //     return valid;
  //   } else {
  //     throw new BadRequestException({ messages: 'gagal tersimpan' })
  //   }
  // }


  // @Patch(':id')
  // @ApiBearerAuth()
  // @UseGuards(JwtGuard)
  // @UseInterceptors(FileInterceptor('foto', {
  //   storage: diskStorage({
  //     destination: './pics/img_profile',
  //     filename: (req: any, file, cb) => {
  //       cb(null, + Date.now() + extname(file.originalname))
  //     }
  //   })
  // }))
  // @ApiConsumes('multipart/form-data')
  // @ApiBody({ type: UpdateUserDto })
  // async update(@Param('id') id: string, @Body() updateProfileBengkelDto: UpdateUserDto, @UploadedFile() foto: Express.Multer.File) {
  //   updateProfileBengkelDto.id = id
  //   let val = Math.floor(1000 + Math.random() * 900000);
  //   console.log(val)
  //   updateProfileBengkelDto.code = val
  //   updateProfileBengkelDto.foto = foto.filename
  //   const role = 'bengkel';
  //   updateProfileBengkelDto.role = role

  //   let valid = await this.profileBengkelService.update(id, updateProfileBengkelDto);
  //   if (valid) {
  //     return valid;
  //   } else {
  //     throw new BadRequestException({ messages: 'gagal tersimpan' })
  //   }
  // }


  // @Post()
  // @UseInterceptors(FileInterceptor('foto', {
  //   storage: diskStorage({
  //     destination: './pics/img_profile',
  //     filename: (req: any, file, cb) => {
  //       cb(null, + Date.now() + extname(file.originalname))
  //     }
  //   })
  // }))
  // @ApiConsumes('multipart/form-data')
  // @ApiBody({ type: CreateUserDto })
  // async create(@Body() createProfileBengkelDto: CreateUserDto, @UploadedFile() foto: Express.Multer.File) {
  //   let val = Math.floor(1000 + Math.random() * 900000);
  //   console.log(val)
  //   createProfileBengkelDto.code = val
  //   createProfileBengkelDto.foto = foto.filename
  //   const role = 'bengkel';
  //   createProfileBengkelDto.role = role
  //   let valid = await this.profileBengkelService.create(createProfileBengkelDto);
  //   if (valid) {
  //     this.profileBengkelService.sendOtp(valid.no_hp, val);
  //     return valid;
  //   } else {
  //     throw new BadRequestException({ messages: 'gagal tersimpan' })
  //   }
  // }

   // @Post()
  // @ApiBody({ type: CreateUserDto })
  // async create(@Body() dto: CreateUserDto) {
  //   const f = await this.profileBengkelService.convertToFile(dto.foto)
  //   let val = Math.floor(1000 + Math.random() * 900000);
  //   dto.code = val
  //   dto.foto = f
  //   const role = 'bengkel';
  //   dto.role = role
  //   let findNo = await this.profileBengkelService.findNoHp(dto.no_hp);

  //   if (findNo) {
  //     throw new BadRequestException({ message: 'no sudah digunakan' })
  //   } else {
  //     let valid = await this.profileBengkelService.create(dto);
  //     if (valid) {
  //       // this.profileBengkelService.sendOtp(valid.no_hp, val);
  //       return valid;
  //     } else {
  //       throw new BadRequestException({ messages: 'gagal tersimpan' })
  //     }
  //   }
  // }