import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataJualMotorService } from 'src/data-jual-motor/data-jual-motor.service';
import { Like, Repository } from 'typeorm';
import { CreateJualMotorDto } from './dto/create-jual-motor.dto';
import { UpdateJualMotorDto } from './dto/update-jual-motor.dto';
import { DeskripsiMotor } from './entities/deskripsi-motor.entity';
import { JualMotor } from './entities/jual-motor.entity';

@Injectable()
export class JualMotorService {

  constructor(
    @InjectRepository(JualMotor) private jmRepo: Repository<JualMotor>,
    @InjectRepository(DeskripsiMotor) private deskMotor: Repository<DeskripsiMotor>,
    private datajualMotorService: DataJualMotorService
  ) { }

  async create(dto: CreateJualMotorDto) {
    try {
      return await this.jmRepo.save(dto)
    } catch (err) {
      throw new BadRequestException({ message: 'gagal tersimpan' });
    }
  }

  findAll() {
    return this.jmRepo.find({ relations: ['user', 'dataJualmotor', 'dataJualmotor.galerimotor', 'dataJualmotor.dokumenmotor'], order: { update_at: 'DESC' } });
  }

  findOne(id: string) {
    return this.jmRepo.findOne(id, { relations: ['dataJualmotor', 'dataJualmotor.galerimotor', 'dataJualmotor.dokumenmotor', 'ulasanMotor', 'ulasanMotor.user'] });
  }

  findAllBaru() {
    return this.jmRepo.findOne({ where: { kondisi: 'baru' }, order: { update_at: 'DESC' }, relations: ['dataJualmotor', 'dataJualmotor.galerimotor', 'dataJualmotor.dokumenmotor', 'ulasanMotor', 'ulasanMotor.user'] });
  }

  findAllBekas() {
    return this.jmRepo.findOne({ where: { kondisi: 'bekas' }, order: { update_at: 'DESC' }, relations: ['dataJualmotor', 'dataJualmotor.galerimotor', 'dataJualmotor.dokumenmotor', 'ulasanMotor', 'ulasanMotor.user'] });
  }

  async update(id: string, dto: UpdateJualMotorDto) {
    try {
      dto.id = id
      return await this.jmRepo.save(dto)
    } catch (err) {
      throw new BadRequestException({ message: 'gagal tersimpan' });
    }
  }

  async findSearch(search) {
    return await this.jmRepo.find({
      where: [
        { lokasi: Like('%' + search + '%') },
        { tahun_kendaraan: Like('%' + search + '%') },
        { tipe: Like('%' + search + '%') },
        { harga: Like('%' + search + '%') },
        { merek_motor: Like('%' + search + '%') },
        { model: Like('%' + search + '%') },
      ], relations: ['dataJualmotor', 'dataJualmotor.galerimotor', 'dataJualmotor.dokumenmotor']
    });
  }

  async remove(id: string) {
    const jmotor = await this.jmRepo.findOne(id, {
      relations: [
        'dataJualmotor'
      ]
    });
    console.log(id);
    if (jmotor) {
      const datajual_motor = jmotor.dataJualmotor[0].id
      console.log(datajual_motor);
      await this.datajualMotorService.remove(datajual_motor);
      return this.jmRepo.remove(jmotor);
    } else {
      throw new BadRequestException({ message: 'failed delete data motor' });
    }
    // const datajual_motor = jmotor.dataJualmotor[0].id
    // console.log(datajual_motor);
    // await this.datajualMotorService.remove(datajual_motor);
    // return this.jmRepo.remove(jmotor);
  }
}




  // async create(dto: CreateJualMotorDto) {
  //   try {
  //     const getId = await this.jmRepo.save({
  //       merek_motor: dto.merek_motor,
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
  //       var desk = await this.deskMotor.save({
  //         tipe_mesin: m[i].tipe_mesin,
  //         cc: m[i].cc,
  //         sistem_pembakaran: m[i].sistem_pembakaran,
  //         diameter_langkah: m[i].diameter_langkah,
  //         jumlah_silinder: m[i].jumlah_silinder,
  //         tipe_transmisi: m[i].tipe_transmisi,
  //         rasio_kompresi: m[i].rasio_kompresi,
  //         daya_maksimum: m[i].daya_maksimum,
  //         torsi_maksimum: m[i].torsi_maksimum,
  //         tipe_stater: m[i].tipe_stater,
  //         tipe_kopling: m[i].tipe_kopling,
  //         jualmotor: { id: getId.id }
  //       });
  //     }
  //     return { data: { desk, getId } }
  //   } catch (err) {
  //     throw new BadRequestException({ message: 'gagal tersimpan' });
  //   }
  // }

  // async update(id: string, dto: UpdateJualMotorDto) {
  //   try {
  //     dto.id = id
  //     const getId = await this.jmRepo.save({
  //       id: dto.id,
  //       merek_motor: dto.merek_motor,
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
  //       var desk = await this.deskMotor.save({
  //         id: m[0].id,
  //         tipe_mesin: m[i].tipe_mesin,
  //         cc: m[i].cc,
  //         sistem_pembakaran: m[i].sistem_pembakaran,
  //         diameter_langkah: m[i].diameter_langkah,
  //         jumlah_silinder: m[i].jumlah_silinder,
  //         tipe_transmisi: m[i].tipe_transmisi,
  //         rasio_kompresi: m[i].rasio_kompresi,
  //         daya_maksimum: m[i].daya_maksimum,
  //         torsi_maksimum: m[i].torsi_maksimum,
  //         tipe_stater: m[i].tipe_stater,
  //         tipe_kopling: m[i].tipe_kopling,
  //         jualmotor: { id: dto.id }
  //       });
  //     }
  //     return { data: { getId, desk } }
  //   } catch (err) {
  //     throw new BadRequestException({ message: 'gagal tersimpan' });
  //   }
  // }
