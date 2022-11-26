import { BadRequestException, Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserService } from 'src/user/user.service';
import { AuthCode, AuthNo } from './auth.dto';
import { AuthService } from './auth.service';
import { JwtGuard } from './jwt.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService) { }

  @Post()
  async login(@Body() autnohDto: AuthNo) {
    let user = await this.authService.cekUser(autnohDto.no_hp)
    if (user) {
      console.log(user.no_hp)
      let val = Math.floor(1000 + Math.random() * 999999);
      let cek = await this.userService.updateCode(user.no_hp, val)
      if (cek) {
        // const cek1 = await this.authService.sendOtp(user.no_hp, val)
        // console.log(cek1)
        // return {
        //   data: cek,
        //   message: 'Otp terkirim'
        // }
        // const data = await this.authService.cekUser(c)
        return { otp: val, message: 'ini kode otp nya' }
      } else {
        throw new BadRequestException({ messages: 'gagal send otp' })
      }

    } else {
      throw new BadRequestException({ messages: 'gagal login' })
    }
  }

  @Post('check-code')
  async checkCode(@Body() authcodehDto: AuthCode) {
    let user = await this.authService.checkCode(authcodehDto.code)
    if (user) {
      return this.authService.generateToken({ id: user.id })
    } else {
      throw new BadRequestException({ messages: 'gagal login' })
    }
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  cekUser(@Request() req) {
    console.log(req.user)
    return req.user
  }

  @Post('register-facebook')
  async loginByFacebook() {
    return 'beloom ada Client Id Facebooknya'
  }
}
