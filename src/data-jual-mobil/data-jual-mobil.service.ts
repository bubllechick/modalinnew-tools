import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDataJualMobilDto } from './dto/create-data-jual-mobil.dto';
import { UpdateDataJualMobilDto } from './dto/update-data-jual-mobil.dto';
import { DataJualMobil } from './entities/data-jual-mobil.entity';
import * as crypto from 'crypto'
import { DokumenMobil } from './entities/data-dokumen-mobil.entity';
import { GaleriMobil } from './entities/data-galeri-mobil.entity';
import { FileService } from 'src/file/file.service';

@Injectable()
export class DataJualMobilService {
  constructor(
    @InjectRepository(DataJualMobil) private djmobilRepo: Repository<DataJualMobil>,
    @InjectRepository(DokumenMobil) private dmobilRepo: Repository<DokumenMobil>,
    @InjectRepository(GaleriMobil) private gmobilRepo: Repository<GaleriMobil>,
    private fileService: FileService,
  ) { }


  async create(dto: CreateDataJualMobilDto) {
    const dtoeks = dto.eksterior
    const dtodok = dto.dokumen

    if (dtoeks[0].eksterior1) // eksterior 1
      await this.fileService.uploadImage(dtoeks[0].eksterior1, 'data-mobil')
        .then(({ hashedFileName: imageName }) => { dtoeks[0].eksterior1 = imageName; })
        .catch((err) => { throw new BadRequestException('Error Upload Image'); });

    if (dtoeks[0].eksterior2) // eksterior 2
      await this.fileService.uploadImage(dtoeks[0].eksterior2, 'data-mobil')
        .then(({ hashedFileName: imageName }) => { dtoeks[0].eksterior2 = imageName; })
        .catch((err) => { throw new BadRequestException('Error Upload Image'); });

    if (dtoeks[0].eksterior3) // eksterior 3
      await this.fileService.uploadImage(dtoeks[0].eksterior3, 'data-mobil')
        .then(({ hashedFileName: imageName }) => { dtoeks[0].eksterior3 = imageName; })
        .catch((err) => { throw new BadRequestException('Error Upload Image'); });

    if (dtoeks[0].eksterior4) // eksterior 4
      await this.fileService.uploadImage(dtoeks[0].eksterior4, 'data-mobil')
        .then(({ hashedFileName: imageName }) => { dtoeks[0].eksterior4 = imageName; })
        .catch((err) => { throw new BadRequestException('Error Upload Image'); });

    if (dtoeks[0].eksterior5) // eksterior 5
      await this.fileService.uploadImage(dtoeks[0].eksterior5, 'data-mobil')
        .then(({ hashedFileName: imageName }) => { dtoeks[0].eksterior5 = imageName; })
        .catch((err) => { throw new BadRequestException('Error Upload Image'); });

    if (dtoeks[0].eksterior6) // eksterior 6
      await this.fileService.uploadImage(dtoeks[0].eksterior6, 'data-mobil')
        .then(({ hashedFileName: imageName }) => { dtoeks[0].eksterior6 = imageName; })
        .catch((err) => { throw new BadRequestException('Error Upload Image'); });

    if (dtoeks[0].eksterior7) // eksterior 7
      await this.fileService.uploadImage(dtoeks[0].eksterior7, 'data-mobil')
        .then(({ hashedFileName: imageName }) => { dtoeks[0].eksterior7 = imageName; })
        .catch((err) => { throw new BadRequestException('Error Upload Image'); });

    if (dtoeks[0].eksterior8) // eksterior 8
      await this.fileService.uploadImage(dtoeks[0].eksterior8, 'data-mobil')
        .then(({ hashedFileName: imageName }) => { dtoeks[0].eksterior8 = imageName; })
        .catch((err) => { throw new BadRequestException('Error Upload Image'); });

    if (dtodok[0].stkn_depan) // stkn_depan 
      await this.fileService.uploadImage(dtodok[0].stkn_depan, 'data-mobil')
        .then(({ hashedFileName: imageName }) => { dtodok[0].stkn_depan = imageName; })
        .catch((err) => { throw new BadRequestException('Error Upload Image'); });

    if (dtodok[0].stkn_belakang) // stkn_belakang 
      await this.fileService.uploadImage(dtodok[0].stkn_belakang, 'data-mobil')
        .then(({ hashedFileName: imageName }) => { dtodok[0].stkn_belakang = imageName; })
        .catch((err) => { throw new BadRequestException('Error Upload Image'); });

    if (dtodok[0].buku_manual) // buku_manual 
      await this.fileService.uploadImage(dtodok[0].buku_manual, 'data-mobil')
        .then(({ hashedFileName: imageName }) => { dtodok[0].buku_manual = imageName; })
        .catch((err) => { throw new BadRequestException('Error Upload Image'); });

    if (dtodok[0].buku_service) // buku_service 
      await this.fileService.uploadImage(dtodok[0].buku_service, 'data-mobil')
        .then(({ hashedFileName: imageName }) => { dtodok[0].buku_service = imageName; })
        .catch((err) => { throw new BadRequestException('Error Upload Image'); });

    if (dtodok[0].kunci_cadangan) // kunci_cadangan 
      await this.fileService.uploadImage(dtodok[0].kunci_cadangan, 'data-mobil')
        .then(({ hashedFileName: imageName }) => { dtodok[0].kunci_cadangan = imageName; })
        .catch((err) => { throw new BadRequestException('Error Upload Image'); });

    if (dtodok[0].bpkb) // bpkb 
      await this.fileService.uploadImage(dtodok[0].bpkb, 'data-mobil')
        .then(({ hashedFileName: imageName }) => { dtodok[0].bpkb = imageName; })
        .catch((err) => { throw new BadRequestException('Error Upload Image'); });


    try {

      const dataJualMobil = await this.djmobilRepo.save({
        jualMobil: { id: dto.jualmobilId }
      });
      for (var i: number = 0; i < dto.dokumen.length; i++) {
        const d = dto.dokumen
        var dokumen_mobil = await this.dmobilRepo.save({
          stkn_depan: dtodok[0].stkn_depan,
          stkn_belakang: dtodok[0].stkn_belakang,
          buku_manual: dtodok[0].buku_manual,
          buku_service: dtodok[0].buku_service,
          kunci_cadangan: dtodok[0].kunci_cadangan,
          bpkb: dtodok[0].bpkb,
          datajualmobil: { id: dataJualMobil.id }
        });
      }
      for (var x: number = 0; x < dto.eksterior.length; x++) {
        const e = dto.eksterior
        var galeri_mobil = await this.gmobilRepo.save({
          eksterior1: dtoeks[0].eksterior1,
          eksterior2: dtoeks[0].eksterior2,
          eksterior3: dtoeks[0].eksterior3,
          eksterior4: dtoeks[0].eksterior4,
          eksterior5: dtoeks[0].eksterior5,
          eksterior6: dtoeks[0].eksterior6,
          eksterior7: dtoeks[0].eksterior7,
          eksterior8: dtoeks[0].eksterior8,
          datajualmobil: { id: dataJualMobil.id }
        });
      }
      return {
        data: dataJualMobil, dokumen_mobil, galeri_mobil
      }
    } catch (err) {
      throw new BadRequestException({ message: 'data not saved' })
    }
  }

  findAll() {
    return this.djmobilRepo.find({ relations: ['jualMobil', 'dokumenMobil', 'galeriMobil'] });
  }

  findOne(id: string) {
    return this.djmobilRepo.findOne(id, { relations: ['jualMobil', 'dokumenMobil', 'galeriMobil'] });
  }

  async update(id: string, dto: UpdateDataJualMobilDto) {
    const datajmobil_id = await this.djmobilRepo.findOne(id, { relations: ['jualMobil', 'dokumenMobil', 'galeriMobil'] });
    const dgm = datajmobil_id.galeriMobil[0]
    const ddm = datajmobil_id.dokumenMobil[0]

    if (dgm.eksterior1 === dto.eksterior[0].eksterior1) {
      dto.eksterior[0].eksterior1 = dgm.eksterior1; console.log('data ga usah diubah');
    } else {
      this.fileService.delete(dgm.eksterior1, 'data-mobil');
      if (dto.eksterior[0].eksterior1)
        await this.fileService.uploadImage(dto.eksterior[0].eksterior1, 'data-mobil')
          .then(({ hashedFileName: imageName }) => { dto.eksterior[0].eksterior1 = imageName; })
          .catch((err) => { throw new BadRequestException('Error Upload Image'); });
      console.log('eksterior data harus diubah');
    }

    if (dgm.eksterior2 === dto.eksterior[0].eksterior2) {
      dto.eksterior[0].eksterior2 = dgm.eksterior2; console.log('data ga usah diubah');
    }
    else {
      this.fileService.delete(dgm.eksterior2, 'data-mobil');
      if (dto.eksterior[0].eksterior2)
        await this.fileService.uploadImage(dto.eksterior[0].eksterior2, 'data-mobil')
          .then(({ hashedFileName: imageName }) => { dto.eksterior[0].eksterior2 = imageName; })
          .catch((err) => { throw new BadRequestException('Error Upload Image'); });
      console.log('data harus diubah');
    }

    if (dgm.eksterior3 === dto.eksterior[0].eksterior3) {
      dto.eksterior[0].eksterior3 === dgm.eksterior3; console.log('data ga usah diubah');
    } else {
      this.fileService.delete(dgm.eksterior3, 'data-mobil');
      if (dto.eksterior[0].eksterior3)
        await this.fileService.uploadImage(dto.eksterior[0].eksterior3, 'data-mobil')
          .then(({ hashedFileName: imageName }) => { dto.eksterior[0].eksterior3 = imageName; })
          .catch((err) => { throw new BadRequestException('Error Upload Image'); });
      console.log('data harus diubah');
    }

    if (dgm.eksterior4 === dto.eksterior[0].eksterior4) {
      dto.eksterior[0].eksterior4 === dgm.eksterior4; console.log('data ga usah diubah');
    } else {
      this.fileService.delete(dgm.eksterior4, 'data-mobil');
      if (dto.eksterior[0].eksterior4)
        await this.fileService.uploadImage(dto.eksterior[0].eksterior4, 'data-mobil')
          .then(({ hashedFileName: imageName }) => { dto.eksterior[0].eksterior4 = imageName; })
          .catch((err) => { throw new BadRequestException('Error Upload Image'); });
      console.log('data harus diubah');
    }

    if (dgm.eksterior5 === dto.eksterior[0].eksterior5) {
      dto.eksterior[0].eksterior5 === dgm.eksterior5; console.log('data ga usah diubah');
    } else {
      this.fileService.delete(dgm.eksterior5, 'data-mobil');
      if (dto.eksterior[0].eksterior5)
        await this.fileService.uploadImage(dto.eksterior[0].eksterior5, 'data-mobil')
          .then(({ hashedFileName: imageName }) => { dto.eksterior[0].eksterior5 = imageName; })
          .catch((err) => { throw new BadRequestException('Error Upload Image'); });
      console.log('data harus diubah');
    }

    if (dgm.eksterior6 === dto.eksterior[0].eksterior6) {
      dto.eksterior[0].eksterior6 === dgm.eksterior6; console.log('data ga usah diubah');
    } else {
      this.fileService.delete(dgm.eksterior6, 'data-mobil');
      if (dto.eksterior[0].eksterior6)
        await this.fileService.uploadImage(dto.eksterior[0].eksterior6, 'data-mobil')
          .then(({ hashedFileName: imageName }) => { dto.eksterior[0].eksterior6 = imageName; })
          .catch((err) => { throw new BadRequestException('Error Upload Image'); });
      console.log('data harus diubah');
    }

    if (dgm.eksterior7 === dto.eksterior[0].eksterior7) {
      dto.eksterior[0].eksterior7 === dgm.eksterior7; console.log('data ga usah diubah');
    } else {
      this.fileService.delete(dgm.eksterior7, 'data-mobil');
      if (dto.eksterior[0].eksterior7)
        await this.fileService.uploadImage(dto.eksterior[0].eksterior7, 'data-mobil')
          .then(({ hashedFileName: imageName }) => { dto.eksterior[0].eksterior7 = imageName; })
          .catch((err) => { throw new BadRequestException('Error Upload Image'); });
      console.log('data harus diubah');
    }

    if (dgm.eksterior8 === dto.eksterior[0].eksterior8) {
      dto.eksterior[0].eksterior8 === dgm.eksterior8; console.log('data ga usah diubah');
    } else {
      this.fileService.delete(dgm.eksterior8, 'data-mobil');
      if (dto.eksterior[0].eksterior8)
        await this.fileService.uploadImage(dto.eksterior[0].eksterior8, 'data-mobil')
          .then(({ hashedFileName: imageName }) => { dto.eksterior[0].eksterior8 = imageName; })
          .catch((err) => { throw new BadRequestException('Error Upload Image'); });
      console.log('data harus diubah');
    }

    if (ddm.stkn_depan === dto.dokumen[0].stkn_depan) {
      dto.dokumen[0].stkn_depan === ddm.stkn_depan; console.log('data ga usah diubah');
    } else {
      this.fileService.delete(ddm.stkn_depan, 'data-mobil');
      if (dto.dokumen[0].stkn_depan)
        await this.fileService.uploadImage(dto.dokumen[0].stkn_depan, 'data-mobil')
          .then(({ hashedFileName: imageName }) => { dto.dokumen[0].stkn_depan = imageName; })
          .catch((err) => { throw new BadRequestException('Error Upload Image'); });
      console.log('data harus diubah');
    }

    if (ddm.stkn_belakang === dto.dokumen[0].stkn_belakang) {
      dto.dokumen[0].stkn_belakang === ddm.stkn_belakang; console.log('data ga usah diubah');
    } else {
      this.fileService.delete(ddm.stkn_belakang, 'data-mobil');
      if (dto.dokumen[0].stkn_belakang)
        await this.fileService.uploadImage(dto.dokumen[0].stkn_belakang, 'data-mobil')
          .then(({ hashedFileName: imageName }) => { dto.dokumen[0].stkn_belakang = imageName; })
          .catch((err) => { throw new BadRequestException('Error Upload Image'); });
      console.log('data harus diubah');
    }

    if (ddm.buku_manual === dto.dokumen[0].buku_manual) {
      dto.dokumen[0].buku_manual === ddm.buku_manual; console.log('data ga usah diubah');
    } else {
      this.fileService.delete(ddm.buku_manual, 'data-mobil');
      if (dto.dokumen[0].buku_manual)
        await this.fileService.uploadImage(dto.dokumen[0].buku_manual, 'data-mobil')
          .then(({ hashedFileName: imageName }) => { dto.dokumen[0].buku_manual = imageName; })
          .catch((err) => { throw new BadRequestException('Error Upload Image'); });
      console.log('data harus diubah');
    }

    if (ddm.buku_service === dto.dokumen[0].buku_service) {
      dto.dokumen[0].buku_service === ddm.buku_service; console.log('data ga usah diubah');
    } else {
      this.fileService.delete(ddm.buku_service, 'data-mobil');
      if (dto.dokumen[0].buku_service)
        await this.fileService.uploadImage(dto.dokumen[0].buku_service, 'data-mobil')
          .then(({ hashedFileName: imageName }) => { dto.dokumen[0].buku_service = imageName; })
          .catch((err) => { throw new BadRequestException('Error Upload Image'); });
      console.log('data harus diubah');
    }

    if (ddm.kunci_cadangan === dto.dokumen[0].kunci_cadangan) {
      dto.dokumen[0].kunci_cadangan === ddm.kunci_cadangan; console.log('data ga usah diubah');
    } else {
      this.fileService.delete(ddm.kunci_cadangan, 'data-mobil');
      if (dto.dokumen[0].kunci_cadangan)
        await this.fileService.uploadImage(dto.dokumen[0].kunci_cadangan, 'data-mobil')
          .then(({ hashedFileName: imageName }) => { dto.dokumen[0].kunci_cadangan = imageName; })
          .catch((err) => { throw new BadRequestException('Error Upload Image'); });
      console.log('data harus diubah');
    }

    if (ddm.bpkb === dto.dokumen[0].bpkb) {
      dto.dokumen[0].bpkb === ddm.bpkb; console.log('data ga usah diubah');
    } else {
      this.fileService.delete(ddm.bpkb, 'data-mobil');
      if (dto.dokumen[0].bpkb)
        await this.fileService.uploadImage(dto.dokumen[0].bpkb, 'data-mobil')
          .then(({ hashedFileName: imageName }) => { dto.dokumen[0].bpkb = imageName; })
          .catch((err) => { throw new BadRequestException('Error Upload Image'); });
      console.log('data harus diubah');
    }

    id = dto.id

    try {
      const dataJualMobil = await this.djmobilRepo.save({
        id: dto.id,
        jualMobil: { id: dto.jualmobilId }
      });
      var datajmobil = await this.djmobilRepo.findOne(dataJualMobil.id);
      var dokumenmobil_id = await this.dmobilRepo.findOne(datajmobil.dokumenMobil);
      var galerimobil_id = await this.gmobilRepo.findOne(datajmobil.galeriMobil);
      console.log(datajmobil);
      console.log(dokumenmobil_id.id);
      console.log(galerimobil_id.id);

      for (var i: number = 0; i < dto.dokumen.length; i++) {
        const d = dto.dokumen
        var dokumen_mobil = await this.dmobilRepo.save({
          id: dokumenmobil_id.id,
          stkn_depan: dto.dokumen[0].stkn_depan,
          stkn_belakang: dto.dokumen[0].stkn_belakang,
          buku_manual: dto.dokumen[0].buku_manual,
          buku_service: dto.dokumen[0].buku_service,
          kunci_cadangan: dto.dokumen[0].kunci_cadangan,
          bpkb: dto.dokumen[0].bpkb,
          datajualmobil: { id: dataJualMobil.id }
        });
      }
      for (var x: number = 0; x < dto.eksterior.length; x++) {
        const e = dto.eksterior
        var galeri_mobil = await this.gmobilRepo.save({
          id: galerimobil_id.id,
          eksterior1: dto.eksterior[0].eksterior1,
          eksterior2: dto.eksterior[0].eksterior2,
          eksterior3: dto.eksterior[0].eksterior3,
          eksterior4: dto.eksterior[0].eksterior4,
          eksterior5: dto.eksterior[0].eksterior5,
          eksterior6: dto.eksterior[0].eksterior6,
          eksterior7: dto.eksterior[0].eksterior7,
          eksterior8: dto.eksterior[0].eksterior8,
          datajualmobil: { id: dataJualMobil.id }
        });
        return {
          data: [dataJualMobil, dokumen_mobil, galeri_mobil],
          message: 'this your data',
        }
      }
    } catch (err) {
      throw new BadRequestException({ message: 'failed for update' });
    }

  }

  async remove(id: string) {
    let dtMobil = await this.djmobilRepo.findOne(id)
    console.log(dtMobil);
    if (dtMobil) {
      var dokumenmobil_id = await this.dmobilRepo.findOne(dtMobil.dokumenMobil);
      var galerimobil_id = await this.gmobilRepo.findOne(dtMobil.galeriMobil);
      console.log(dtMobil, dokumenmobil_id, galerimobil_id);
      // return this.djmobilRepo.remove(dtMobil);
      try {
        await this.fileService.delete(dokumenmobil_id.stkn_depan, 'data-mobil');
        await this.fileService.delete(dokumenmobil_id.stkn_belakang, 'data-mobil');
        await this.fileService.delete(dokumenmobil_id.buku_manual, 'data-mobil');
        await this.fileService.delete(dokumenmobil_id.buku_service, 'data-mobil');
        await this.fileService.delete(dokumenmobil_id.kunci_cadangan, 'data-mobil');
        await this.fileService.delete(dokumenmobil_id.bpkb, 'data-mobil');

        await this.fileService.delete(galerimobil_id.eksterior1, 'data-mobil');
        await this.fileService.delete(galerimobil_id.eksterior2, 'data-mobil');
        await this.fileService.delete(galerimobil_id.eksterior3, 'data-mobil');
        await this.fileService.delete(galerimobil_id.eksterior4, 'data-mobil');
        await this.fileService.delete(galerimobil_id.eksterior5, 'data-mobil');
        await this.fileService.delete(galerimobil_id.eksterior6, 'data-mobil');
        await this.fileService.delete(galerimobil_id.eksterior7, 'data-mobil');
        await this.fileService.delete(galerimobil_id.eksterior8, 'data-mobil');
        return await this.djmobilRepo.remove(dtMobil);
      }
      catch (err) {
        throw new BadRequestException({ message: 'data not found' });
      }
    } else {
      throw new BadRequestException({ message: 'data not found' });
    }
  }
}



   // if (
    //   (
    //     dgm.eksterior1 === dto.eksterior[0].eksterior1,
    //     dgm.eksterior2 === dto.eksterior[0].eksterior2,
    //     dgm.eksterior3 === dto.eksterior[0].eksterior3,
    //     dgm.eksterior4 === dto.eksterior[0].eksterior4,
    //     dgm.eksterior5 === dto.eksterior[0].eksterior5,
    //     dgm.eksterior6 === dto.eksterior[0].eksterior6,
    //     dgm.eksterior7 === dto.eksterior[0].eksterior7,
    //     dgm.eksterior8 === dto.eksterior[0].eksterior8
    //   )
    //   &&
    //   (
    //     ddm.stkn_depan === dto.dokumen[0].stkn_depan,
    //     ddm.stkn_belakang === dto.dokumen[0].stkn_belakang,
    //     ddm.buku_manual === dto.dokumen[0].buku_manual,
    //     ddm.buku_service === dto.dokumen[0].buku_service,
    //     ddm.kunci_cadanga === dto.dokumen[0].kunci_cadangan,
    //     ddm.bpkb === dto.dokumen[0].bpkb)
    // ) {
    //   console.log('data ga usah diubah');
    // } else {
    //   console.log('data diubah');
    // }



    // console.log(
    //   ddm.stkn_depan,
    //   ddm.stkn_belakang,
    //   ddm.buku_manual,
    //   ddm.buku_service,
    //   ddm.kunci_cadangan,
    //   ddm.bpkb
    // );
    // console.log(
    //   dgm.eksterior1,
    //   dgm.eksterior2,
    //   dgm.eksterior3,
    //   dgm.eksterior4,
    //   dgm.eksterior5,
    //   dgm.eksterior6,
    //   dgm.eksterior7,
    //   dgm.eksterior8,
    // );
    // if (dgm.eksterior1 === dto.eksterior[0].eksterior1) {
    //   console.log('data ga usah diubah');
    //   dto.eksterior[0].eksterior1 = dgm.eksterior1
    //   dto.eksterior[0].eksterior2 = dgm.eksterior2
    //   dto.eksterior[0].eksterior3 = dgm.eksterior3
    //   dto.eksterior[0].eksterior4 = dgm.eksterior4
    //   dto.eksterior[0].eksterior5 = dgm.eksterior5
    //   dto.eksterior[0].eksterior6 = dgm.eksterior6
    //   dto.eksterior[0].eksterior7 = dgm.eksterior7
    //   dto.eksterior[0].eksterior8 = dgm.eksterior8
    // } else {
    //   this.fileService.delete(dgm.eksterior1, 'img_profile');
    //   this.fileService.delete(dgm.eksterior2, 'img_profile');
    //   this.fileService.delete(dgm.eksterior3, 'img_profile');
    //   this.fileService.delete(dgm.eksterior4, 'img_profile');
    //   this.fileService.delete(dgm.eksterior5, 'img_profile');
    //   this.fileService.delete(dgm.eksterior6, 'img_profile');
    //   this.fileService.delete(dgm.eksterior7, 'img_profile');
    //   this.fileService.delete(dgm.eksterior8, 'img_profile');
    //   if (dto.eksterior[0].eksterior1)
    //     await this.fileService.uploadImage(dto.eksterior[0].eksterior1, 'data-mobil')
    //       .then(({ hashedFileName: imageName }) => { dto.eksterior[0].eksterior1 = imageName; })
    //       .catch((err) => { throw new BadRequestException('Error Upload Image'); });

    //   if (dto.eksterior[0].eksterior2)
    //     await this.fileService.uploadImage(dto.eksterior[0].eksterior2, 'data-mobil')
    //       .then(({ hashedFileName: imageName }) => { dto.eksterior[0].eksterior2 = imageName; })
    //       .catch((err) => { throw new BadRequestException('Error Upload Image'); });

    //   if (dto.eksterior[0].eksterior3)
    //     await this.fileService.uploadImage(dto.eksterior[0].eksterior3, 'data-mobil')
    //       .then(({ hashedFileName: imageName }) => { dto.eksterior[0].eksterior3 = imageName; })
    //       .catch((err) => { throw new BadRequestException('Error Upload Image'); });

    //   if (dto.eksterior[0].eksterior4)
    //     await this.fileService.uploadImage(dto.eksterior[0].eksterior4, 'data-mobil')
    //       .then(({ hashedFileName: imageName }) => { dto.eksterior[0].eksterior4 = imageName; })
    //       .catch((err) => { throw new BadRequestException('Error Upload Image'); });

    //   if (dto.eksterior[0].eksterior5)
    //     await this.fileService.uploadImage(dto.eksterior[0].eksterior5, 'data-mobil')
    //       .then(({ hashedFileName: imageName }) => { dto.eksterior[0].eksterior5 = imageName; })
    //       .catch((err) => { throw new BadRequestException('Error Upload Image'); });

    //   if (dto.eksterior[0].eksterior6)
    //     await this.fileService.uploadImage(dto.eksterior[0].eksterior6, 'data-mobil')
    //       .then(({ hashedFileName: imageName }) => { dto.eksterior[0].eksterior6 = imageName; })
    //       .catch((err) => { throw new BadRequestException('Error Upload Image'); });

    //   if (dto.eksterior[0].eksterior7)
    //     await this.fileService.uploadImage(dto.eksterior[0].eksterior7, 'data-mobil')
    //       .then(({ hashedFileName: imageName }) => { dto.eksterior[0].eksterior7 = imageName; })
    //       .catch((err) => { throw new BadRequestException('Error Upload Image'); });

    //   if (dto.eksterior[0].eksterior8)
    //     await this.fileService.uploadImage(dto.eksterior[0].eksterior8, 'data-mobil')
    //       .then(({ hashedFileName: imageName }) => { dto.eksterior[0].eksterior8 = imageName; })
    //       .catch((err) => { throw new BadRequestException('Error Upload Image'); });

    // dto.eksterior[0].eksterior1
    // dto.eksterior[0].eksterior2
    // dto.eksterior[0].eksterior3
    // dto.eksterior[0].eksterior4
    // dto.eksterior[0].eksterior5
    // dto.eksterior[0].eksterior6
    // dto.eksterior[0].eksterior7
    // dto.eksterior[0].eksterior8
    // console.log('data harus diubah');
    // }



    // const dtoeks = dto.eksterior
    // const dtodok = dto.dokumen

    // if (dtoeks[0].eksterior1) // eksterior 1
    //   await this.fileService.uploadImage(dtoeks[0].eksterior1, 'data-mobil')
    //     .then(({ hashedFileName: imageName }) => { dtoeks[0].eksterior1 = imageName; })
    //     .catch((err) => { throw new BadRequestException('Error Upload Image'); });

    // if (dtoeks[0].eksterior2) // eksterior 2
    //   await this.fileService.uploadImage(dtoeks[0].eksterior2, 'data-mobil')
    //     .then(({ hashedFileName: imageName }) => { dtoeks[0].eksterior2 = imageName; })
    //     .catch((err) => { throw new BadRequestException('Error Upload Image'); });

    // if (dtoeks[0].eksterior3) // eksterior 3
    //   await this.fileService.uploadImage(dtoeks[0].eksterior3, 'data-mobil')
    //     .then(({ hashedFileName: imageName }) => { dtoeks[0].eksterior3 = imageName; })
    //     .catch((err) => { throw new BadRequestException('Error Upload Image'); });

    // if (dtoeks[0].eksterior4) // eksterior 4
    //   await this.fileService.uploadImage(dtoeks[0].eksterior4, 'data-mobil')
    //     .then(({ hashedFileName: imageName }) => { dtoeks[0].eksterior4 = imageName; })
    //     .catch((err) => { throw new BadRequestException('Error Upload Image'); });

    // if (dtoeks[0].eksterior5) // eksterior 5
    //   await this.fileService.uploadImage(dtoeks[0].eksterior5, 'data-mobil')
    //     .then(({ hashedFileName: imageName }) => { dtoeks[0].eksterior5 = imageName; })
    //     .catch((err) => { throw new BadRequestException('Error Upload Image'); });

    // if (dtoeks[0].eksterior6) // eksterior 6
    //   await this.fileService.uploadImage(dtoeks[0].eksterior6, 'data-mobil')
    //     .then(({ hashedFileName: imageName }) => { dtoeks[0].eksterior6 = imageName; })
    //     .catch((err) => { throw new BadRequestException('Error Upload Image'); });

    // if (dtoeks[0].eksterior7) // eksterior 7
    //   await this.fileService.uploadImage(dtoeks[0].eksterior7, 'data-mobil')
    //     .then(({ hashedFileName: imageName }) => { dtoeks[0].eksterior7 = imageName; })
    //     .catch((err) => { throw new BadRequestException('Error Upload Image'); });

    // if (dtoeks[0].eksterior8) // eksterior 8
    //   await this.fileService.uploadImage(dtoeks[0].eksterior8, 'data-mobil')
    //     .then(({ hashedFileName: imageName }) => { dtoeks[0].eksterior8 = imageName; })
    //     .catch((err) => { throw new BadRequestException('Error Upload Image'); });

    // if (dtodok[0].stkn_depan) // stkn_depan
    //   await this.fileService.uploadImage(dtodok[0].stkn_depan, 'data-mobil')
    //     .then(({ hashedFileName: imageName }) => { dtodok[0].stkn_depan = imageName; })
    //     .catch((err) => { throw new BadRequestException('Error Upload Image'); });

    // if (dtodok[0].stkn_belakang) // stkn_belakang
    //   await this.fileService.uploadImage(dtodok[0].stkn_belakang, 'data-mobil')
    //     .then(({ hashedFileName: imageName }) => { dtodok[0].stkn_belakang = imageName; })
    //     .catch((err) => { throw new BadRequestException('Error Upload Image'); });

    // if (dtodok[0].buku_manual) // buku_manual
    //   await this.fileService.uploadImage(dtodok[0].buku_manual, 'data-mobil')
    //     .then(({ hashedFileName: imageName }) => { dtodok[0].buku_manual = imageName; })
    //     .catch((err) => { throw new BadRequestException('Error Upload Image'); });

    // if (dtodok[0].buku_service) // buku_service
    //   await this.fileService.uploadImage(dtodok[0].buku_service, 'data-mobil')
    //     .then(({ hashedFileName: imageName }) => { dtodok[0].buku_service = imageName; })
    //     .catch((err) => { throw new BadRequestException('Error Upload Image'); });

    // if (dtodok[0].kunci_cadangan) // kunci_cadanga
    //   await this.fileService.uploadImage(dtodok[0].kunci_cadangan, 'data-mobil')
    //     .then(({ hashedFileName: imageName }) => { dtodok[0].kunci_cadangan = imageName; })
    //     .catch((err) => { throw new BadRequestException('Error Upload Image'); });

    // if (dtodok[0].bpkb) // bpkb
    //   await this.fileService.uploadImage(dtodok[0].bpkb, 'data-mobil')
    //     .then(({ hashedFileName: imageName }) => { dtodok[0].bpkb = imageName; })
    //     .catch((err) => { throw new BadRequestException('Error Upload Image'); });




      //   console.log(dtoeks[0].eksterior1);
      // console.log(dtoeks[0].eksterior2);
      // console.log(dtoeks[0].eksterior3);
      // console.log(dtoeks[0].eksterior4);
      // console.log(dtoeks[0].eksterior5);
      // console.log(dtoeks[0].eksterior6);
      // console.log(dtoeks[0].eksterior7);
      // console.log(dtoeks[0].eksterior8);

      // console.log(dtodok[0].stkn_depan);
      // console.log(dtodok[0].stkn_belakang);
      // console.log(dtodok[0].buku_manual);
      // console.log(dtodok[0].buku_service);
      // console.log(dtodok[0].kunci_cadangan);
      // console.log(dtodok[0].bpkb);

     // stkn_depan: await this.convertToFile(d[i].stkn_depan),
          // stkn_belakang: await this.convertToFile(d[i].stkn_belakang),
          // buku_manual: await this.convertToFile(d[i].buku_manual),
          // buku_service: await this.convertToFile(d[i].buku_service),
          // kunci_cadangan: await this.convertToFile(d[i].kunci_cadangan),
          // bpkb: await this.convertToFile(d[i].bpkb),

          // eksterior1: await this.convertToFile(e[x].eksterior1),
          // eksterior2: await this.convertToFile(e[x].eksterior2),
          // eksterior3: await this.convertToFile(e[x].eksterior3),
          // eksterior4: await this.convertToFile(e[x].eksterior4),
          // eksterior5: await this.convertToFile(e[x].eksterior5),
          // eksterior6: await this.convertToFile(e[x].eksterior6),
          // eksterior7: await this.convertToFile(e[x].eksterior7),
          // eksterior8: await this.convertToFile(e[x].eksterior8),


    // return this.djmobilRepo.save({
    //   eksterior1: dto.eksterior1, eksterior2: dto.eksterior2,
    //   eksterior3: dto.eksterior3, eksterior4: dto.eksterior4,
    //   eksterior5: dto.eksterior5, eksterior6: dto.eksterior6,
    //   eksterior7: dto.eksterior7, eksterior8: dto.eksterior8,

    //   interior1: dto.interior1, interior2: dto.interior2,
    //   interior3: dto.interior3, interior4: dto.interior4,
    //   interior5: dto.interior5, interior6: dto.interior6,
    //   interior7: dto.interior7, interior8: dto.interior8,

    //   stkn_depan: dto.stkn_depan,
    //   stkn_belakang: dto.stkn_belakang,
    //   buku_manual: dto.buku_manual,
    //   buku_service: dto.buku_service,
    //   kunci_cadangan: dto.kunci_cadangan,
    //   bpkb: dto.bpkb,

    //   jualMobil: { id: dto.jualmobilId }

    // });


    // const data = await this.djmobilRepo
    //   .createQueryBuilder()
    //   .update()
    //   .set({
    //     eksterior1: dto.eksterior1, eksterior2: dto.eksterior2,
    //     eksterior3: dto.eksterior3, eksterior4: dto.eksterior4,
    //     eksterior5: dto.eksterior5, eksterior6: dto.eksterior6,
    //     eksterior7: dto.eksterior7, eksterior8: dto.eksterior8,

    //     interior1: dto.interior1, interior2: dto.interior2,
    //     interior3: dto.interior3, interior4: dto.interior4,
    //     interior5: dto.interior5, interior6: dto.interior6,
    //     interior7: dto.interior7, interior8: dto.interior8,

    //     stkn_depan: dto.stkn_depan,
    //     stkn_belakang: dto.stkn_belakang,
    //     buku_manual: dto.buku_manual,
    //     buku_service: dto.buku_service,
    //     kunci_cadangan: dto.kunci_cadangan,
    //     bpkb: dto.bpkb,

    //     jualMobil: { id: dto.jualmobilId }
    //   })
    //   .where('id = :id', { id: dto.id })
    //   .execute()
    // if (data['affected'] > 0) {
    //   return {
    //     message: 'data has been updated',
    //     data: dto
    //   }
    // } else {
    //   return {
    //     message: 'No updated',
    //     data: {}
    //   }
    // }

      // async convertToFile(file) {
  //   const frombase64 = Buffer.from(file, 'base64')
  //   const fs = require('fs')
  //   const findExtension = await this.fileHeader(file)
  //   const imagePath = `./pics/data-mobil/`;
  //   let val = Math.floor(1000 + Math.random() * 900000);
  //   const d1 = new Date();
  //   const d2 = new Date(Date.UTC(
  //     d1.getUTCFullYear(),
  //     d1.getUTCMonth(),
  //     d1.getUTCDate(),
  //     d1.getUTCHours(),
  //     d1.getUTCMinutes(),
  //     d1.getUTCSeconds(),
  //     d1.getUTCMilliseconds(),
  //   ),)
  //   let temp_filename = d2.toString()
  //   let hashedFileName = crypto
  //     .createHash('md5')
  //     .update(temp_filename)
  //     .digest("hex");
  //   fs.writeFile(imagePath + hashedFileName + val + '.' + findExtension, frombase64, function (err) { });
  //   const filename = hashedFileName + val + '.' + findExtension;
  //   return filename;

  // }

  // async fileHeader(file) {
  //   let fileHeader = new Map()
  //   fileHeader.set("/9j", "JPG")
  //   fileHeader.set("iVB", "PNG")
  //   fileHeader.set("Qk0", "BMP")
  //   fileHeader.set("SUk", "TIFF")
  //   fileHeader.set("JVB", "PDF")
  //   fileHeader.set("UEs", "OFD")
  //   let res = ""
  //   fileHeader.forEach((v, k) => {
  //     if (k == file.substr(0, 3)) { res = v }
  //   })
  //   if (res == "") { res = "unknown file" } return res;
  // }