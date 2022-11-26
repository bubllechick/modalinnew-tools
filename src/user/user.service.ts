import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as crypto from 'crypto';
import { JualMobil } from 'src/jual-mobil/entities/jual-mobil.entity';
import { JualMotor } from 'src/jual-motor/entities/jual-motor.entity';
import { FileService } from 'src/file/file.service';
import { JualMotorService } from 'src/jual-motor/jual-motor.service';
import { JualMobilService } from 'src/jual-mobil/jual-mobil.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(JualMobil) private jualMobilRepo: Repository<JualMobil>,
    @InjectRepository(JualMotor) private jualMotorRepo: Repository<JualMotor>,
    private readonly fileSerice: FileService,
    private readonly jualMotorService: JualMotorService,
    private readonly jualMobilService: JualMobilService
  ) { }
  create(createUserDto: CreateUserDto) {
    return this.userRepo.save(createUserDto);
  }

  findAll() {
    return this.userRepo.find({ relations: ['favoritemotor', 'favoritemobil'] });
  }

  // findAllFav() {
  //   return this.userRepo.find({ relations: ['favorite'] });
  // }

  findOne(id: string) {
    return this.userRepo.findOne(id, {
      relations: [
        'favoritemotor', 'favoritemotor.jualmotor', 'favoritemotor.jualmotor.dataJualmotor',
        'favoritemotor.jualmotor.dataJualmotor.galerimotor', 'favoritemotor.jualmotor.dataJualmotor.dokumenmotor',
        'favoritemobil', 'favoritemobil.jualmobil', 'favoritemobil.jualmobil.datajualmobil',
        'favoritemobil.jualmobil.datajualmobil.galeriMobil', 'favoritemobil.jualmobil.datajualmobil.dokumenMobil',
        'jualMotor', 'jualMobil',
        'jualMotor.dataJualmotor', 'jualMotor.dataJualmotor.galerimotor', 'jualMotor.dataJualmotor.dokumenmotor',
        'jualMobil.datajualmobil', 'jualMobil.datajualmobil.galeriMobil', 'jualMobil.datajualmobil.dokumenMobil']
    });
  }
  findOneBengkel(id: string) {
    return this.userRepo.findOne(id, {
      relations: ['detailBengkel', 'detailBengkel.layananBengkel']
    });
  }

  findCode(code) {
    return this.userRepo.findOne({ code: code });
  }

  findNoHp(no_hp) {
    console.log(no_hp);
    return this.userRepo.findOne({ no_hp: no_hp });
  }

  async cekNoHp(no_hp) {
    let cekNohp = await this.userRepo.findOne({ no_hp: no_hp });
    if (cekNohp) {
      throw new BadRequestException({ message: 'no sudah digunakan' });
    } else {
      return cekNohp
    }
  }

  async getHome(take = 5, page = 1) {
    const dataMobil = await this.jualMobilRepo.find({ relations: ['datajualmobil', 'datajualmobil.dokumenMobil', 'datajualmobil.galeriMobil'], take, skip: take * (page - 1), order: { update_at: 'DESC' } });
    const dataMotor = await this.jualMotorRepo.find({ relations: ['dataJualmotor', 'dataJualmotor.galerimotor', 'dataJualmotor.dokumenmotor'], take, skip: take * (page - 1), order: { update_at: 'DESC' } });
    const dataBengkel = await this.userRepo.find({ where: { role: 'bengkel' }, relations: ['detailBengkel', 'detailBengkel.layananBengkel'] })
    return { data: { dataMobil, dataMotor, dataBengkel }, message: 'ini datanya' }
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    updateUserDto.id = id
    return this.userRepo.save(updateUserDto);
  }

  async remove(id: string) {
    var user = await this.userRepo.findOne(id, { relations: ['jualMotor', 'jualMobil'] });
    try {
      if (user) {
        if (user.foto) {
          // await this.fileSerice.delete(user.foto, 'img_profile');
          // var data = await this.userRepo.remove(user);
          // return data
          const jualMobil = user.jualMobil[0];
          const jualMotor = user.jualMotor[0];
          // console.log(jualMobil, jualMotor);
          // const jmotor = await this.jualMotorService.remove(jualMotor);
          // const jmobil = await this.jualMobilService.remove(jualMobil);
          if (jualMobil) { await this.jualMobilService.remove(jualMobil.id); }
          if (jualMotor) { await this.jualMotorService.remove(jualMotor.id); }
          await this.fileSerice.delete(user.foto, 'img_profile');
          var data = await this.userRepo.remove(user);
          return data
        } else {
          throw new BadRequestException({ message: 'data not found' });
        }
      } else {
        throw new BadRequestException({ message: 'data not found' });
      }
    } catch (err) {
      throw new BadRequestException({ message: 'data not found' });
    }
  }

  async updateToBengkel(id) {
    var role = 'bengkel';
    await this.userRepo.update(id.user, {
      ...(role && { role: role })
    });
    return this.userRepo.findOneOrFail(id.user);
  }

  async updateCode(no_hp, val) {
    let s = await this.userRepo.update(
      { no_hp: no_hp },
      { code: val }
    )
    console.log(s);
    return s
  }

  async sendOtp(no_hp, code) {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = require('twilio')(accountSid, authToken);

    client.messages.create({
      body: 'Otp number' + code,
      to: '+62' + no_hp,
      from: '+19804857553'
    }).then(message => console.log(message))
      .catch(error => console.log(error))
  }

  async convertToFile(file) {
    const frombase64 = Buffer.from(file, 'base64')
    const fs = require('fs')
    const findExtension = await this.fileHeader(file)
    const imagePath = `./pics/img_profile/`;
    let val = Math.floor(1000 + Math.random() * 900000);
    const d1 = new Date();
    const d2 = new Date(Date.UTC(
      d1.getUTCFullYear(),
      d1.getUTCMonth(),
      d1.getUTCDate(),
      d1.getUTCHours(),
      d1.getUTCMinutes(),
      d1.getUTCSeconds(),
      d1.getUTCMilliseconds(),
    ),)
    let temp_filename = d2.toString()
    let hashedFileName = crypto
      .createHash('md5')
      .update(temp_filename)
      .digest("hex");
    fs.writeFile(imagePath + hashedFileName + val + '.' + findExtension, frombase64, function (err) { });
    const filename = hashedFileName + val + '.' + findExtension;
    return filename;

  }

  async fileHeader(file) {
    let fileHeader = new Map()
    fileHeader.set("/9j", "JPG")
    fileHeader.set("iVB", "PNG")
    fileHeader.set("Qk0", "BMP")
    fileHeader.set("SUk", "TIFF")
    fileHeader.set("JVB", "PDF")
    fileHeader.set("UEs", "OFD")
    let res = ""
    fileHeader.forEach((v, k) => {
      if (k == file.substr(0, 3)) { res = v }
    })
    if (res == "") { res = "unknown file" } return res;
  }


}
