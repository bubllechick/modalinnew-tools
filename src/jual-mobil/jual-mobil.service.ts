import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataJualMobilService } from 'src/data-jual-mobil/data-jual-mobil.service';
import { Like, Repository } from 'typeorm';
import { CreateJualMobilDto } from './dto/create-jual-mobil.dto';
import { UpdateJualMobilDto } from './dto/update-jual-mobil.dto';
import { DeskripsiMobil } from './entities/deskripsi-mobil.entity';
import { JualMobil } from './entities/jual-mobil.entity';

@Injectable()
export class JualMobilService {
  constructor(
    @InjectRepository(JualMobil) private jmobilRepo: Repository<JualMobil>,
    @InjectRepository(DeskripsiMobil) private deskMobil: Repository<DeskripsiMobil>,
    private dataJualMobilService: DataJualMobilService
  ) { }

  async create(dto: CreateJualMobilDto) {
    try {
      const datajualmobil = await this.jmobilRepo.save(dto);
      console.log(datajualmobil);
      return datajualmobil;
    } catch (err) {
      throw new BadRequestException({ message: 'gagal tersimpan' });
    }
  }

  findAll() {
    return this.jmobilRepo.find({ order: { update_at: 'DESC' }, relations: ['datajualmobil', 'datajualmobil.dokumenMobil', 'datajualmobil.galeriMobil'] });
  }

  findAllBaru() {
    return this.jmobilRepo.findOne({ where: { kondisi: 'baru' }, order: { update_at: 'DESC' }, relations: ['datajualmobil', 'datajualmobil.dokumenMobil', 'datajualmobil.galeriMobil', 'ulasanMobil', 'ulasanMobil.user'] });
  }

  findAllBekas() {
    return this.jmobilRepo.findOne({ where: { kondisi: 'bekas' }, order: { update_at: 'DESC' }, relations: ['datajualmobil', 'datajualmobil.dokumenMobil', 'datajualmobil.galeriMobil', 'ulasanMobil', 'ulasanMobil.user'] });
  }

  async findSearch(search) {
    return await this.jmobilRepo.find({
      where: [
        { lokasi: Like('%' + search + '%') },
        { tahun_kendaraan: Like('%' + search + '%') },
        { tipe: Like('%' + search + '%') },
        { harga: Like('%' + search + '%') },
        { merek_mobil: Like('%' + search + '%') },
        { model: Like('%' + search + '%') },
        { warna: Like('%' + search + '%') },
      ], relations: ['datajualmobil', 'datajualmobil.dokumenMobil', 'datajualmobil.galeriMobil']
    })
  }

  findOne(id: string) {
    return this.jmobilRepo.findOne(id, { relations: ['datajualmobil', 'datajualmobil.dokumenMobil', 'datajualmobil.galeriMobil', 'ulasanMobil', 'ulasanMobil.user'] });
  }

  async update(id: string, dto: UpdateJualMobilDto) {
    // updateJualMobilDto.id = id
    // return this.jmobilRepo.save(updateJualMobilDto);
    try {
      dto.id = id
      const getId = await this.jmobilRepo.save(dto);
    } catch (err) {
      throw new BadRequestException({ message: 'gagal tersimpan' });
    }
  }

  async remove(id: string) {
    let jualmobil = await this.jmobilRepo.findOne(id, {
      relations: ['datajualmobil']
    });
    console.log(id);
    if (jualmobil) {
      const datajual_mobil = jualmobil.datajualmobil[0].id;
      await this.dataJualMobilService.remove(datajual_mobil);
      console.log(datajual_mobil);
      return this.jmobilRepo.remove(jualmobil);
    } else {
      throw new BadRequestException({ message: 'failed delete data mobil' });
    }
    // const datajual_mobil = jualmobil.datajualmobil[0].id;
    // // await this.dataJualMobilService.remove(datajual_mobil);
    // console.log(datajual_mobil);
    // // return this.jmobilRepo.remove(jualmobil);
  }
}


  // async update(id: string, dto: UpdateJualMobilDto) {
  //   // updateJualMobilDto.id = id
  //   // return this.jmobilRepo.save(updateJualMobilDto);
  //   try {
  //     dto.id = id
  //     const getId = await this.jmobilRepo.save({
  //       id: dto.id,
  //       merek_mobil: dto.merek_mobil,
  //       model: dto.model,
  //       no_polisi: dto.no_polisi,
  //       jarak_tempuh: dto.jarak_tempuh,
  //       tipe: dto.tipe,
  //       tahun_kendaraan: dto.tahun_kendaraan,
  //       warna: dto.warna,
  //       lokasi: dto.lokasi,
  //       harga: dto.harga,
  //       kondisi: dto.kondisi,
  //       user: dto.user
  //     });
  //     for (var i: number = 0; i < dto.deskripsi.length; i++) {
  //       const m = dto.deskripsi
  //       console.log(m.length)
  //       m[i].id = dto.deskripsi[0].id
  //       var desk = await this.deskMobil.save({
  //         id: m[0].id,
  //         cc: m[0].cc,
  //         diameter_pistion: m[0].diameter_pistion,
  //         langkah_mesin: m[0].langkah_mesin,
  //         jumlah_silinder: m[0].jumlah_silinder,
  //         tipe_mesin: m[0].tipe_mesin,
  //         torisi_maksimum: m[0].toris_maksimum,
  //         type: m[0].type,
  //         sistem_pendinginan: m[0].sistem_pendinginan,
  //         sistem_pembakaran: m[0].sistem_pembakaran,
  //         jualmobil: { id: getId.id }
  //       });
  //     }
  //     return { data: { desk, getId } }
  //   } catch (err) {
  //     throw new BadRequestException({ message: 'gagal tersimpan' });
  //   }
  // }



  // async create(dto: CreateJualMobilDto) {
  //   // return this.jmobilRepo.save(dto);
  //   try {
  //     const getId = await this.jmobilRepo.save({
  //       merek_mobil: dto.merek_mobil,
  //       model: dto.model,
  //       no_polisi: dto.no_polisi,
  //       jarak_tempuh: dto.jarak_tempuh,
  //       tipe: dto.tipe,
  //       tahun_kendaraan: dto.tahun_kendaraan,
  //       warna: dto.warna,
  //       lokasi: dto.lokasi,
  //       harga: dto.harga,
  //       kondisi: dto.kondisi,
  //       user: dto.user
  //     });
  //     for (var i: number = 0; i < dto.deskripsi.length; i++) {
  //       const m = dto.deskripsi
  //       console.log(m.length)
  //       var desk = await this.deskMobil.save({
  //         cc: m[0].cc,
  //         diameter_pistion: m[0].diameter_pistion,
  //         langkah_mesin: m[0].langkah_mesin,
  //         jumlah_silinder: m[0].jumlah_silinder,
  //         tipe_mesin: m[0].tipe_mesin,
  //         torisi_maksimum: m[0].toris_maksimum,
  //         type: m[0].type,
  //         sistem_pendinginan: m[0].sistem_pendinginan,
  //         sistem_pembakaran: m[0].sistem_pembakaran,
  //         jualmobil: { id: getId.id }
  //       });
  //     }
  //     return { data: { desk, getId } }
  //   } catch (err) {
  //     throw new BadRequestException({ message: 'gagal tersimpan' });
  //   }
  // }
