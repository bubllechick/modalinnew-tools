import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDataJualMotorDto } from './dto/create-data-jual-motor.dto';
import { UpdateDataJualMotorDto } from './dto/update-data-jual-motor.dto';
import { DataJualMotor } from './entities/data-jual-motor.entity';
import * as crypto from 'crypto';
import { DokumenMotor } from './entities/data-dokumen.entity';
import { GaleriMotor } from './entities/data-galeri.entity';
import { FileService } from 'src/file/file.service';

@Injectable()
export class DataJualMotorService {
  constructor(
    @InjectRepository(DataJualMotor)
    private djmotorRepo: Repository<DataJualMotor>,
    @InjectRepository(DokumenMotor)
    private dokumenRepo: Repository<DokumenMotor>,
    @InjectRepository(GaleriMotor)
    private galeriRepo: Repository<GaleriMotor>,
    private fileService: FileService,
  ) { }

  async create(dto: CreateDataJualMotorDto) {
    const dtod = dto.dokumen;
    const dtog = dto.galeri;
    // console.log(dtod, dtog);

    if (dtod[0].bpkb)      // bpkb 1
      await this.fileService
        .uploadImage(dtod[0].bpkb, 'data-motor')
        .then(({ hashedFileName: imageName }) => {
          dtod[0].bpkb = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });
    if (dtod[0].buku_manual)
      await this.fileService
        .uploadImage(dtod[0].buku_manual, 'data-motor')
        .then(({ hashedFileName: imageName }) => {
          dtod[0].buku_manual = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });
    if (dtod[0].buku_service)
      await this.fileService
        .uploadImage(dtod[0].buku_service, 'data-motor')
        .then(({ hashedFileName: imageName }) => {
          dtod[0].buku_service = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });
    if (dtod[0].kunci_cadangan)
      await this.fileService
        .uploadImage(dtod[0].kunci_cadangan, 'data-motor')
        .then(({ hashedFileName: imageName }) => {
          dtod[0].kunci_cadangan = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });
    if (dtod[0].stkn_depan)
      await this.fileService
        .uploadImage(dtod[0].stkn_depan, 'data-motor')
        .then(({ hashedFileName: imageName }) => {
          dtod[0].stkn_depan = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });
    if (dtod[0].stkn_belakang)
      await this.fileService
        .uploadImage(dtod[0].stkn_belakang, 'data-motor')
        .then(({ hashedFileName: imageName }) => {
          dtod[0].stkn_belakang = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });

    if (dtog[0].galeri1)
      await this.fileService
        .uploadImage(dtog[0].galeri1, 'data-motor')
        .then(({ hashedFileName: imageName }) => {
          dtog[0].galeri1 = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });
    if (dtog[0].galeri2)
      await this.fileService
        .uploadImage(dtog[0].galeri2, 'data-motor')
        .then(({ hashedFileName: imageName }) => {
          dtog[0].galeri2 = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });
    if (dtog[0].galeri3)
      await this.fileService
        .uploadImage(dtog[0].galeri3, 'data-motor')
        .then(({ hashedFileName: imageName }) => {
          dtog[0].galeri3 = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });
    if (dtog[0].galeri4)
      await this.fileService
        .uploadImage(dtog[0].galeri4, 'data-motor')
        .then(({ hashedFileName: imageName }) => {
          dtog[0].galeri4 = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });
    if (dtog[0].galeri5)
      await this.fileService
        .uploadImage(dtog[0].galeri5, 'data-motor')
        .then(({ hashedFileName: imageName }) => {
          dtog[0].galeri5 = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });
    if (dtog[0].galeri6)
      await this.fileService
        .uploadImage(dtog[0].galeri6, 'data-motor')
        .then(({ hashedFileName: imageName }) => {
          dtog[0].galeri6 = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });
    if (dtog[0].galeri7)
      await this.fileService
        .uploadImage(dtog[0].galeri7, 'data-motor')
        .then(({ hashedFileName: imageName }) => {
          dtog[0].galeri7 = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });
    if (dtog[0].galeri8)
      await this.fileService
        .uploadImage(dtog[0].galeri8, 'data-motor')
        .then(({ hashedFileName: imageName }) => {
          dtog[0].galeri8 = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });

    try {
      const dataJualMotor = await this.djmotorRepo.save({
        jualMotor: { id: dto.jualmotorId },
      });
      for (var i: number = 0; i < dto.dokumen.length; i++) {
        const d = dto.dokumen;
        var dokumen_motor = await this.dokumenRepo.save({
          stkn_depan: dtod[0].stkn_depan,
          stkn_belakang: dtod[0].stkn_belakang,
          buku_manual: dtod[0].buku_manual,
          buku_service: dtod[0].buku_service,
          kunci_cadangan: dtod[0].kunci_cadangan,
          bpkb: dtod[0].bpkb,
          datajualmotor: { id: dataJualMotor.id },
        });
      }
      for (var x: number = 0; x < dto.galeri.length; x++) {
        const g = dto.galeri;
        var galeri_motor = await this.galeriRepo.save({
          galeri1: dtog[0].galeri1,
          galeri2: dtog[0].galeri2,
          galeri3: dtog[0].galeri3,
          galeri4: dtog[0].galeri4,
          galeri5: dtog[0].galeri5,
          galeri6: dtog[0].galeri6,
          galeri7: dtog[0].galeri7,
          galeri8: dtog[0].galeri8,
          datajualmotor: { id: dataJualMotor.id },
        });
      }

      return {
        data: dataJualMotor,
        dokumen_motor,
        galeri_motor,
      };
    } catch (err) {
      throw new BadRequestException({ message: 'data not saved' });
    }
  }

  findAll() {
    return this.djmotorRepo.find();
  }

  findOne(id: string) {
    return this.djmotorRepo.findOne(id, {
      relations: ['jualMotor', 'galerimotor', 'dokumenmotor'],
    });
  }

  async update(id: string, dto: UpdateDataJualMotorDto) {
    const data_motor_id = await this.djmotorRepo.findOne(id, {
      relations: ['jualMotor', 'galerimotor', 'dokumenmotor'],
    });
    const dgmotor = data_motor_id.galerimotor[0];
    const ddmotor = data_motor_id.dokumenmotor[0];

    // console.log(data_motor_id);
    // console.log(dgmotor);
    // console.log(dgmotor);
    id = dto.id;

    if (ddmotor.stkn_depan === dto.dokumen[0].stkn_depan) {
      console.log('data ga usah diubah');
      dto.dokumen[0].stkn_depan = ddmotor.stkn_depan;
    } else {
      console.log('data harus diubah');
      this.fileService.delete(ddmotor.stkn_depan, 'data-motor');
      if (dto.dokumen[0].stkn_depan)
        await this.fileService.uploadImage(dto.dokumen[0].stkn_depan, 'data-motor')
          .then(({ hashedFileName: imageName }) => { dto.dokumen[0].stkn_depan = imageName; })
          .catch((err) => { throw new BadRequestException('Error Upload Image'); });
    }
    if (ddmotor.stkn_belakang === dto.dokumen[0].stkn_belakang) {
      console.log('data ga usah diubah');
      dto.dokumen[0].stkn_belakang = ddmotor.stkn_belakang;
    } else {
      console.log('data harus diubah');
      this.fileService.delete(ddmotor.stkn_belakang, 'data-motor');
      if (dto.dokumen[0].stkn_belakang)
        await this.fileService.uploadImage(dto.dokumen[0].stkn_belakang, 'data-motor')
          .then(({ hashedFileName: imageName }) => { dto.dokumen[0].stkn_belakang = imageName; })
          .catch((err) => { throw new BadRequestException('Error Upload Image'); });
    }
    if (ddmotor.kunci_cadangan === dto.dokumen[0].kunci_cadangan) {
      console.log('data ga usah diubah');
      dto.dokumen[0].kunci_cadangan = ddmotor.kunci_cadangan;
    } else {
      console.log('data harus diubah');
      this.fileService.delete(ddmotor.kunci_cadangan, 'data-motor');
      if (dto.dokumen[0].kunci_cadangan)
        await this.fileService.uploadImage(dto.dokumen[0].kunci_cadangan, 'data-motor')
          .then(({ hashedFileName: imageName }) => { dto.dokumen[0].kunci_cadangan = imageName; })
          .catch((err) => { throw new BadRequestException('Error Upload Image'); });
    }
    if (ddmotor.buku_service === dto.dokumen[0].buku_service) {
      console.log('data ga usah diubah');
      dto.dokumen[0].buku_service = ddmotor.buku_service;
    } else {
      console.log('data harus diubah');
      this.fileService.delete(ddmotor.buku_service, 'data-motor');
      if (dto.dokumen[0].buku_service)
        await this.fileService.uploadImage(dto.dokumen[0].buku_service, 'data-motor')
          .then(({ hashedFileName: imageName }) => { dto.dokumen[0].buku_service = imageName; })
          .catch((err) => { throw new BadRequestException('Error Upload Image'); });
    }
    if (ddmotor.buku_manual === dto.dokumen[0].buku_manual) {
      console.log('data ga usah diubah');
      dto.dokumen[0].buku_manual = ddmotor.buku_manual;
    } else {
      console.log('data harus diubah');
      this.fileService.delete(ddmotor.buku_manual, 'data-motor');
      if (dto.dokumen[0].buku_manual)
        await this.fileService.uploadImage(dto.dokumen[0].buku_manual, 'data-motor')
          .then(({ hashedFileName: imageName }) => { dto.dokumen[0].buku_manual = imageName; })
          .catch((err) => { throw new BadRequestException('Error Upload Image'); });
    }
    if (ddmotor.bpkb === dto.dokumen[0].bpkb) {
      console.log('data ga usah diubah');
      dto.dokumen[0].bpkb = ddmotor.bpkb;
    } else {
      console.log('data harus diubah');
      this.fileService.delete(ddmotor.bpkb, 'data-motor');
      if (dto.dokumen[0].bpkb)
        await this.fileService.uploadImage(dto.dokumen[0].bpkb, 'data-motor')
          .then(({ hashedFileName: imageName }) => { dto.dokumen[0].bpkb = imageName; })
          .catch((err) => { throw new BadRequestException('Error Upload Image'); });
    }

    // galeri 
    if (dgmotor.galeri1 === dto.galeri[0].galeri1) {
      console.log('data ga usah diubah');
      dto.galeri[0].galeri1 = dgmotor.galeri1;
    } else {
      console.log('data harus diubah');
      this.fileService.delete(dgmotor.galeri1, 'data-motor');
      if (dto.galeri[0].galeri1)
        await this.fileService.uploadImage(dto.galeri[0].galeri1, 'data-motor')
          .then(({ hashedFileName: imageName }) => { dto.galeri[0].galeri1 = imageName; })
          .catch((err) => { throw new BadRequestException('Error Upload Image'); });
    }
    if (dgmotor.galeri2 === dto.galeri[0].galeri2) {
      console.log('data ga usah diubah');
      dto.galeri[0].galeri2 = dgmotor.galeri2;
    } else {
      console.log('data harus diubah');
      this.fileService.delete(dgmotor.galeri2, 'data-motor');
      if (dto.galeri[0].galeri2)
        await this.fileService.uploadImage(dto.galeri[0].galeri2, 'data-motor')
          .then(({ hashedFileName: imageName }) => { dto.galeri[0].galeri2 = imageName; })
          .catch((err) => { throw new BadRequestException('Error Upload Image'); });
    }
    if (dgmotor.galeri3 === dto.galeri[0].galeri3) {
      console.log('data ga usah diubah');
      dto.galeri[0].galeri3 = dgmotor.galeri3;
    } else {
      console.log('data harus diubah');
      this.fileService.delete(dgmotor.galeri3, 'data-motor');
      if (dto.galeri[0].galeri3)
        await this.fileService.uploadImage(dto.galeri[0].galeri3, 'data-motor')
          .then(({ hashedFileName: imageName }) => { dto.galeri[0].galeri3 = imageName; })
          .catch((err) => { throw new BadRequestException('Error Upload Image'); });
    }
    if (dgmotor.galeri4 === dto.galeri[0].galeri4) {
      console.log('data ga usah diubah');
      dto.galeri[0].galeri4 = dgmotor.galeri4;
    } else {
      console.log('data harus diubah');
      this.fileService.delete(dgmotor.galeri4, 'data-motor');
      if (dto.galeri[0].galeri4)
        await this.fileService.uploadImage(dto.galeri[0].galeri4, 'data-motor')
          .then(({ hashedFileName: imageName }) => { dto.galeri[0].galeri4 = imageName; })
          .catch((err) => { throw new BadRequestException('Error Upload Image'); });
    }
    if (dgmotor.galeri5 === dto.galeri[0].galeri5) {
      console.log('data ga usah diubah');
      dto.galeri[0].galeri5 = dgmotor.galeri5;
    } else {
      console.log('data harus diubah');
      this.fileService.delete(dgmotor.galeri5, 'data-motor');
      if (dto.galeri[0].galeri5)
        await this.fileService.uploadImage(dto.galeri[0].galeri5, 'data-motor')
          .then(({ hashedFileName: imageName }) => { dto.galeri[0].galeri5 = imageName; })
          .catch((err) => { throw new BadRequestException('Error Upload Image'); });
    }
    if (dgmotor.galeri6 === dto.galeri[0].galeri6) {
      console.log('data ga usah diubah');
      dto.galeri[0].galeri6 = dgmotor.galeri6;
    } else {
      console.log('data harus diubah');
      this.fileService.delete(dgmotor.galeri6, 'data-motor');
      if (dto.galeri[0].galeri6)
        await this.fileService.uploadImage(dto.galeri[0].galeri6, 'data-motor')
          .then(({ hashedFileName: imageName }) => { dto.galeri[0].galeri6 = imageName; })
          .catch((err) => { throw new BadRequestException('Error Upload Image'); });
    }
    if (dgmotor.galeri7 === dto.galeri[0].galeri7) {
      console.log('data ga usah diubah');
      dto.galeri[0].galeri7 = dgmotor.galeri7;
    } else {
      console.log('data harus diubah');
      this.fileService.delete(dgmotor.galeri7, 'data-motor');
      if (dto.galeri[0].galeri7)
        await this.fileService.uploadImage(dto.galeri[0].galeri7, 'data-motor')
          .then(({ hashedFileName: imageName }) => { dto.galeri[0].galeri7 = imageName; })
          .catch((err) => { throw new BadRequestException('Error Upload Image'); });
    }
    if (dgmotor.galeri8 === dto.galeri[0].galeri8) {
      console.log('data ga usah diubah');
      dto.galeri[0].galeri8 = dgmotor.galeri8;
    } else {
      console.log('data harus diubah');
      this.fileService.delete(dgmotor.galeri8, 'data-motor');
      if (dto.galeri[0].galeri8)
        await this.fileService.uploadImage(dto.galeri[0].galeri8, 'data-motor')
          .then(({ hashedFileName: imageName }) => { dto.galeri[0].galeri8 = imageName; })
          .catch((err) => { throw new BadRequestException('Error Upload Image'); });
    }

    console.log(dto);
    try {
      const data_jualmotor = await this.djmotorRepo.save({
        id: dto.id,
        jualMotor: { id: dto.jualmotorId }
      });
      var datajmotor = await this.djmotorRepo.findOne(data_jualmotor.id);
      var dokumenmotor_id = await this.dokumenRepo.findOne(datajmotor.dokumenmotor);
      var galerimotor_id = await this.galeriRepo.findOne(datajmotor.galerimotor);

      for (var i: number = 0; i < dto.dokumen.length; i++) {
        const d = dto.dokumen
        var dokumen_motor = await this.dokumenRepo.save({
          id: dokumenmotor_id.id,
          stkn_depan: dto.dokumen[0].stkn_depan,
          stkn_belakang: dto.dokumen[0].stkn_belakang,
          buku_manual: dto.dokumen[0].buku_manual,
          buku_service: dto.dokumen[0].buku_service,
          kunci_cadangan: dto.dokumen[0].kunci_cadangan,
          bpkb: dto.dokumen[0].bpkb,
          datajualmotor: { id: data_jualmotor.id }
        });
      }
      for (var x: number = 0; x < dto.galeri.length; x++) {
        const g = dto.galeri
        var galeri_motor = await this.galeriRepo.save({
          id: galerimotor_id.id,
          galeri1: dto.galeri[0].galeri1,
          galeri2: dto.galeri[0].galeri2,
          galeri3: dto.galeri[0].galeri3,
          galeri4: dto.galeri[0].galeri4,
          galeri5: dto.galeri[0].galeri5,
          galeri6: dto.galeri[0].galeri6,
          galeri7: dto.galeri[0].galeri7,
          galeri8: dto.galeri[0].galeri8,
        });
      }
      // console.log(data_jualmotor, dokumen_motor, galeri_motor)
      return { data: [dokumen_motor, galeri_motor], message: 'this your data' }
    } catch (err) {
      throw new BadRequestException({ message: 'failed for saving' });
    }
  }

  async remove(id: string) {
    let djmotor = await this.djmotorRepo.findOne(id);
    // console.log(djmotor);
    // return this.djmotorRepo.remove(djmotor);
    if (djmotor) {
      var dokumen_motor = await this.dokumenRepo.findOne(djmotor.dokumenmotor);
      var galeri_motor = await this.galeriRepo.findOne(djmotor.galerimotor);
      console.log(dokumen_motor, galeri_motor);
      try {
        await this.fileService.delete(dokumen_motor.bpkb, 'data-motor');
        await this.fileService.delete(dokumen_motor.buku_manual, 'data-motor');
        await this.fileService.delete(dokumen_motor.buku_service, 'data-motor');
        await this.fileService.delete(dokumen_motor.kunci_cadangan, 'data-motor');
        await this.fileService.delete(dokumen_motor.stkn_belakang, 'data-motor');
        await this.fileService.delete(dokumen_motor.stkn_depan, 'data-motor');

        await this.fileService.delete(galeri_motor.galeri1, 'data-motor');
        await this.fileService.delete(galeri_motor.galeri2, 'data-motor');
        await this.fileService.delete(galeri_motor.galeri3, 'data-motor');
        await this.fileService.delete(galeri_motor.galeri4, 'data-motor');
        await this.fileService.delete(galeri_motor.galeri5, 'data-motor');
        await this.fileService.delete(galeri_motor.galeri6, 'data-motor');
        await this.fileService.delete(galeri_motor.galeri7, 'data-motor');
        await this.fileService.delete(galeri_motor.galeri8, 'data-motor');
        return await this.djmotorRepo.remove(djmotor);
      } catch (err) {
        throw new BadRequestException({ message: 'data not found' })
      }
    } else {
      throw new BadRequestException({ message: 'data not found' });
    }
  }
}

  // async convertToFile(file) {
  //   const frombase64 = Buffer.from(file, 'base64');
  //   const fs = require('fs');
  //   const findExtension = await this.fileHeader(file);
  //   const imagePath = `./pics/data-motor/`;
  //   let val = Math.floor(1000 + Math.random() * 900000);
  //   const d1 = new Date();
  //   const d2 = new Date(
  //     Date.UTC(
  //       d1.getUTCFullYear(),
  //       d1.getUTCMonth(),
  //       d1.getUTCDate(),
  //       d1.getUTCHours(),
  //       d1.getUTCMinutes(),
  //       d1.getUTCSeconds(),
  //       d1.getUTCMilliseconds(),
  //     ),
  //   );
  //   let temp_filename = d2.toString();
  //   let hashedFileName = crypto
  //     .createHash('md5')
  //     .update(temp_filename)
  //     .digest('hex');
  //   fs.writeFile(
  //     imagePath + hashedFileName + val + '.' + findExtension,
  //     frombase64,
  //     function (err) { },
  //   );
  //   const filename = hashedFileName + val + '.' + findExtension;
  //   return filename;
  // }

  // async fileHeader(file) {
  //   let fileHeader = new Map();
  //   fileHeader.set('/9j', 'JPG');
  //   fileHeader.set('iVB', 'PNG');
  //   fileHeader.set('Qk0', 'BMP');
  //   fileHeader.set('SUk', 'TIFF');
  //   fileHeader.set('JVB', 'PDF');
  //   fileHeader.set('UEs', 'OFD');
  //   let res = '';
  //   fileHeader.forEach((v, k) => {
  //     if (k == file.substr(0, 3)) {
  //       res = v;
  //     }
  //   });
  //   if (res == '') {
  //     res = 'unknown file';
  //   }
  //   return res;
  // }


//    try {
//   const dataJualMotor = await this.djmotorRepo.save({
//     jualMotor: { id: dto.jualmotorId }
//   });
//   for (var i: number = 0; i < dto.dokumen.length; i++) {
//     const d = dto.dokumen
//     var dokumen_motor = await this.dokumenRepo.save({
//       stkn_depan: await this.convertToFile(d[i].stkn_depan),
//       stkn_belakang: await this.convertToFile(d[i].stkn_belakang),
//       buku_manual: await this.convertToFile(d[i].buku_manual),
//       buku_service: await this.convertToFile(d[i].buku_service),
//       kunci_cadangan: await this.convertToFile(d[i].kunci_cadangan),
//       bpkb: await this.convertToFile(d[i].bpkb),
//       datajualmotor: { id: dataJualMotor.id }
//     });
//   }
//   for (var x: number = 0; x < dto.galeri.length; x++) {
//     const g = dto.galeri
//     var galeri_motor = await this.galeriRepo.save({
//       galeri1: await this.convertToFile(g[x].galeri1),
//       galeri2: await this.convertToFile(g[x].galeri2),
//       galeri3: await this.convertToFile(g[x].galeri3),
//       galeri4: await this.convertToFile(g[x].galeri4),
//       galeri5: await this.convertToFile(g[x].galeri5),
//       galeri6: await this.convertToFile(g[x].galeri6),
//       galeri7: await this.convertToFile(g[x].galeri7),
//       galeri8: await this.convertToFile(g[x].galeri8),
//       datajualmotor: { id: dataJualMotor.id }
//     });
//   }

//   return {
//     data: dataJualMotor, dokumen_motor, galeri_motor
//   }
// } catch (err) {
//   throw new BadRequestException({ message: 'data not saved' })
// }

//  async upload(file: string) {
//    var Minio = require('minio')
//    const frombase64 = Buffer.from(file, 'base64');

//    var minioClient = new Minio.Client({
//      endPoint: process.env.ENDPOINT_MINIO,
//      port: process.env.PORT_MINIO,
//      useSSL: true,
//      accessKey: process.env.ACCESS_KEY,
//      secretKey: process.env.SECRET_KEY
//    });
//    const findExtension = await this.fileHeader(file)

//    let val = Math.floor(1000 + Math.random() * 900000);
//    const d1 = new Date();
//    const d2 = new Date(Date.UTC(
//      d1.getUTCFullYear(),
//      d1.getUTCMonth(),
//      d1.getUTCDate(),
//      d1.getUTCHours(),
//      d1.getUTCMinutes(),
//      d1.getUTCSeconds(),
//      d1.getUTCMilliseconds(),
//    ),)
//    let temp_filename = d2.toString()
//    let hashedFileName = crypto
//      .createHash('md5')
//      .update(temp_filename)
//      .digest("hex");
//    const filename = 'modalin'+'/'+hashedFileName + val + '.' + findExtension;

//    const urlPath =
//      'https://' +
//      process.env.ENDPOINT_MINIO +
//      '/' +
//      process.env.BASE_BUCKET +
//      '/' +
//      filename;

//    const metaData = {
//      'Content-Type': 'image',
//    };

//   minioClient.putObject(
//     process.env.BASE_BUCKET,
//     filename,
//     frombase64,
//     undefined,
//     metaData,
//     function (err) {}
//   )
//   }

//   public async uploadImage(file: string, folderPath: string) {
//     return new Promise((resolve, reject) => {
//       // this.logger.log('Upload file');
//       var Minio = require('minio')
//       const frombase64 = Buffer.from(file, 'base64');

//       var minioClient = new Minio.Client({
//         endPoint: process.env.ENDPOINT_MINIO,
//         port: process.env.PORT_MINIO,
//         useSSL: true,
//         accessKey: process.env.ACCESS_KEY,
//         secretKey: process.env.SECRET_KEY
//       });
//       const temp_filename = Date.now().toString();
//       const hashedFileName = crypto
//         .createHash('md5')
//         .update(temp_filename)
//         .digest('hex');
//       const filename = folderPath + '/' + hashedFileName + '.jpg';
//       const urlPath =
//         'https://' +
//         process.env.ENDPOINT_MINIO +
//         '/' +
//         process.env.BASE_BUCKET +
//         '/' +
//         filename;
//       console.log(urlPath);

//       const metaData = {
//         'Content-Type': 'image/jpg',
//       };
//       // console.log(
//       //   hashedFileName,
//       //   bufferImage,
//       //   this.configService.get('BASE_BUCKET'),
//       //   filename,
//       // );

//       minioClient.putObject(
//         process.env.BASE_BUCKET,
//         filename,
//         file,
//         undefined,
//         metaData,
//         (err, res) => {
//           if (err) {
//             // this.logger.error(err.message, err.stack);
//             console.log(err);

//             reject(new Error(err.message));
//           }
//           // this.logger.log(`Success Upload Image`);
//           console.log(res);

//           resolve({
//             image_path: filename,
//             urlPath,
//             hashedFileName: `${hashedFileName}.jpg`,
//           });
//         },
//       );
//     });

//     // return {
//     //   url: 'warga',
//     // };
//   }

// public async uploadImage(base64image: string) {
//   return new Promise((resolve, reject) => {
//     var folderPath ='data-mobil';
//     const bufferImage = Buffer.from(base64image, 'base64');
//     const temp_filename = Date.now().toString();
//     const hashedFileName = crypto
//       .createHash('md5')
//       .update(temp_filename)
//       .digest('hex');
//     const filename = folderPath + '/' + hashedFileName + '.jpg';
//     const urlPath =
//       'https://' +
//       this.configService.get('ENDPOINT_MINIO') +
//       '/' +
//       this.configService.get('BASE_BUCKET') +
//       '/' +
//       filename;
//     console.log(urlPath);
//     const metaData = {
//       'Content-Type': 'image/jpg',
//     };

//     this.client.putObject(
//       this.configService.get('BASE_BUCKET'),
//       filename,
//       bufferImage,
//       undefined,
//       metaData,
//       (err, res) => {
//         if (err) {
//           console.log(err);
//           reject(new Error(err.message));
//         }
//         console.log(res);
//         resolve({
//           image_path: filename,
//           urlPath,
//           hashedFileName: `${hashedFileName}.jpg`,
//         });
//       },
//     );
//   });

// }

// galeri1: dto.galeri1, galeri2: dto.galeri2,
//   galeri3: dto.galeri3, galeri4: dto.galeri4,
//   galeri5: dto.galeri5, galeri6: dto.galeri6,
//   galeri7: dto.galeri7, galeri8: dto.galeri8,
//   stkn_depan: dto.stkn_depan,
//   stkn_belakang: dto.stkn_belakang,
//   buku_manual: dto.buku_manual,
//   buku_service: dto.buku_service,
//   kunci_cadangan: dto.kunci_cadangan,
//   bpkb: dto.bpkb,

// return this.djmotorRepo.save({
//   galeri1: dto.galeri1, galeri2: dto.galeri2,
//   galeri3: dto.galeri3, galeri4: dto.galeri4,
//   galeri5: dto.galeri5, galeri6: dto.galeri6,
//   galeri7: dto.galeri7, galeri8: dto.galeri8,
//   stkn_depan: dto.stkn_depan,
//   stkn_belakang: dto.stkn_belakang,
//   buku_manual: dto.buku_manual,
//   buku_service: dto.buku_service,
//   kunci_cadangan: dto.kunci_cadangan,
//   bpkb: dto.bpkb,
//   jualMotor: { id: dto.jualmotorId }
// });

// console.log(id)
// const data_jualmotor = await this.djmotorRepo.save({
//   id: dto.id,
//   jualMotor: { id: dto.jualmotorId }
// });
// const datajmotor = await this.djmotorRepo.findOne(data_jualmotor.id);
// const dokumenmotor_id = await this.dokumenRepo.findOne(datajmotor.dokumenmotor);
// const galerimotor_id = await this.galeriRepo.findOne(datajmotor.galerimotor);
// console.log(datajmotor);
// console.log(dokumenmotor_id.id);
// console.log(galerimotor_id.id);

// console.log(data_jualmotor);
// return data_jualmotor
// const data = await this.djmotorRepo
//   .createQueryBuilder()
//   .update()
//   .set({
//     jualMotor: { id: dto.jualmotorId }
//   })
//   .where('id = :id', { id: dto.id })
//   .execute()
// for (let u: number = 0; u < dto.dokumen.length; ++u) {
//   const d1 = dto.dokumen
// var data_dokumen = await this.dokumenRepo
//   .createQueryBuilder()
//   .update()
//   .set({
//     stkn_depan: await this.convertToFile(d1[u].stkn_depan),
//     stkn_belakang: await this.convertToFile(d1[u].stkn_belakang),
//     buku_manual: await this.convertToFile(d1[u].buku_manual),
//     buku_service: await this.convertToFile(d1[u].buku_service),
//     kunci_cadangan: await this.convertToFile(d1[u].kunci_cadangan),
//     bpkb: await this.convertToFile(d1[u].bpkb),
//     // datajualmotor: { id: dataJualMotor.id }
//   })
//   .where('datajualmotorId = :id', { id: dto.id })
//   .execute()
// }
// for (let g: number = 0; g < dto.galeri.length; ++g) {
//   const g1 = dto.galeri
//   var data_galeri = await this.galeriRepo
//     .createQueryBuilder()
//     .update()
//     .set({
//       galeri1: await this.convertToFile(g1[g].galeri1),
//       galeri2: await this.convertToFile(g1[g].galeri2),
//       galeri3: await this.convertToFile(g1[g].galeri3),
//       galeri4: await this.convertToFile(g1[g].galeri4),
//       galeri5: await this.convertToFile(g1[g].galeri5),
//       galeri6: await this.convertToFile(g1[g].galeri6),
//       galeri7: await this.convertToFile(g1[g].galeri7),
//       galeri8: await this.convertToFile(g1[g].galeri8),
//     })
//     .where('id = :id', { id: dto.id })
//     .execute()
// }

// if (data['affected'] > 0
//   // data_galeri['affected']
//   // &&
//   // data_dokumen['affected'] > 0
// ) {
//   return {
//     message: 'data has been updated',
//     data: data
//   }
// } else {
//   return {
//     message: 'No updated',
//     data: {}
//   }
// }
