import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtservice: JwtService
    ) {

    }
    async cekUser(no_hp) {
        let no = await this.userService.findNoHp(no_hp)
        if (no) {
            return no
        }
        else {
            throw new BadRequestException({ message: 'No Belum Terdaftar' })
        }
    }
    async checkCode(code) {
        let codeCek = await this.userService.findCode(code)
        if (codeCek) {
            return codeCek
        }
        else {
            throw new BadRequestException({ message: 'code salah' })
        }
    }

    async sendOtp(no_hp, code) {
        const accountSid = process.env.TWILIO_ACCOUNT_SID;
        const authToken = process.env.TWILIO_AUTH_TOKEN;
        const client = require('twilio')(accountSid, authToken);

        return client.messages.create({
            body: 'Otp number' + ' ' + code,
            to: '+62' + no_hp,
            from: '+19705512440'
        }).then(message => console.log(message))
            .catch(error => console.log(error))

    }

    async sendOtpbyWa(no_hp, code) {
        const accountSid = process.env.TWILIO_ACCOUNT_SID;
        const authToken = process.env.TWILIO_AUTH_TOKEN;
        const client = require('twilio')(accountSid, authToken);

        client.messages.create({
            from: 'whatsapp:+1 415 523 8886 ',
            body: 'Otp number' + code,
            to: '+62' + no_hp
        }).then(message => console.log(message))
            .catch(error => console.log(error))
    }

    generateToken(mail: any) {
        let dataToken = { id: mail.id }
        let token = this.jwtservice.sign(dataToken)
        return { token: token }
    }
}
