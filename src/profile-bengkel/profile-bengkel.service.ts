import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';
import { User } from 'src/user/entities/user.entity';
import { Like, Repository } from 'typeorm';
import {
  CreateDetailBengkelDto,
  CreateLayananBengkelDto,
  CreateRating,
  DetailBengkelDto,
  LayananBengkelDto,
} from './dto/bengkel.dto';
import { LayananBengkel, RatingBengkel } from './entities/bengkel.entity';
import { DetailBengkel } from './entities/detail-bengkel.entity';
import { FileService } from 'src/file/file.service';

@Injectable()
export class ProfileBengkelService {
  constructor(
    @InjectRepository(User) private pbRepo: Repository<User>,
    @InjectRepository(DetailBengkel) private dbRepo: Repository<DetailBengkel>,
    @InjectRepository(LayananBengkel)
    private lbRepo: Repository<LayananBengkel>,
    @InjectRepository(RatingBengkel) private rbRepo: Repository<RatingBengkel>,
    private readonly fileService: FileService,
  ) { }
  create(dto: CreateUserDto) {
    return this.pbRepo.save(dto);
  }

  async saveDetailBengkel(dto: CreateDetailBengkelDto) {
    console.log(dto);
    if (dto.foto)
      await this.fileService
        .uploadImage(dto.foto, 'banner-bengkel')
        .then(({ hashedFileName: imageName }) => {
          dto.foto = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });
    const dataDetail = await this.dbRepo.save(dto);
    // console.log(dataDetail);
    return dataDetail;
  }

  async updateDetailBengkel(id: string, dto: DetailBengkelDto) {
    dto.id = id;
    const data_detail = await this.dbRepo.findOne(id);
    if (data_detail.foto === dto.foto) {
      dto.foto = data_detail.foto;
      console.log('data ga usah diubah');
    } else {
      this.fileService.delete(data_detail.foto, 'banner-bengkel');
      if (dto.foto)
        await this.fileService
          .uploadImage(dto.foto, 'banner-bengkel')
          .then(({ hashedFileName: imageName }) => {
            dto.foto = imageName;
          })
          .catch((err) => {
            throw new BadRequestException('Error Upload Image');
          });
      console.log('data harus diubah');
    }
    console.log(dto);
    const dataDetail = await this.dbRepo.save(dto);
    console.log(dataDetail);
    return dataDetail;
  }

  async saveLayananBengkel(dto: CreateLayananBengkelDto) {
    if (dto.foto)
      await this.fileService
        .uploadImage(dto.foto, 'data-layanan-bengkel')
        .then(({ hashedFileName: imageName }) => {
          dto.foto = imageName;
        })
        .catch((err) => {
          throw new BadRequestException('Error Upload Image');
        });
    const datalayanan = await this.lbRepo.save({
      detailbengkel: { id: dto.bengkeldetail_id },
      foto: dto.foto,
      judul: dto.judul,
      desc: dto.desc,
      price: dto.price,
      kategori: dto.kategori,
    });
    console.log(datalayanan);
    return datalayanan;
  }

  async updateLayananBengkel(id: string, dto: LayananBengkelDto) {
    dto.id = id;
    const data_layanan = await this.lbRepo.findOne(id);
    if (data_layanan.foto === dto.foto) {
      dto.foto === data_layanan.foto;
      console.log('data ga usah diubah');
    } else {
      await this.fileService.delete(data_layanan.foto, 'data-layanan-bengkel');
      if (dto.foto)
        await this.fileService
          .uploadImage(dto.foto, 'data-layanan-bengkel')
          .then(({ hashedFileName: imageName }) => {
            dto.foto = imageName;
          })
          .catch((err) => {
            throw new BadRequestException('Error Upload Image');
          });
      console.log('data harus diubah');
    }
    const datalayanan = await this.lbRepo.save({
      id: dto.id,
      detailbengkel: { id: dto.bengkeldetail_id },
      foto: dto.foto,
      judul: dto.judul,
      desc: dto.desc,
      price: dto.price,
      kategori: dto.kategori,
    });
    console.log(datalayanan);
    return datalayanan;
  }

  async getAllLayanan() {
    const data_layanan = this.lbRepo.find({relations : ['detailbengkel', 'detailbengkel.user']});
    return data_layanan;
  }

  async findSearch(search) {
    const data = await this.lbRepo.find({
      where: [
        { kategori: Like('%' + search + '%') },
        { price: Like('%' + search + '%') },
        { desc: Like('%' + search + '%') },
      ],
    });
    if (Object.keys(data).length === 0) {
      throw new BadRequestException({ messagea: 'no data searched' });
    } else {
      return data;
    }
  }

  async getallbengkel() {
    const databengkel = await this.pbRepo.find({
      relations: ['detailBengkel', 'detailBengkel.layananBengkel'],
    });
    return databengkel;
  }

  findAll() {
    return this.pbRepo.find();
  }

  findOne(id: string) {
    return this.pbRepo.findOne(id);
  }

  update(id: string, updateProfileBengkelDto: UpdateUserDto) {
    updateProfileBengkelDto.id = id;
    return this.pbRepo.save(updateProfileBengkelDto);
  }

  async remove(id: string) {
    let bengkel = await this.pbRepo.findOne(id);
    return this.pbRepo.remove(bengkel);
  }

  async removeDetailBengkel(id: string) {
    let dataDetail = await this.dbRepo.findOne(id);
    if (dataDetail) {
      return await this.dbRepo.remove(dataDetail);
    } else {
      throw new BadRequestException({ message: 'data is null' });
    }
  }

  async addRating(dto: CreateRating) {
    console.log(dto);
    return await this.rbRepo.save({
      detailbengkel: { id: dto.bengkel_id },
      user: dto.user,
    });
  }

  // async saveBanner(dto: CreateBannerBengkelDto) {
  //   if (dto.foto)
  //     await this.fileService.uploadImage(dto.foto, 'banner-bengkel')
  //       .then(({ hashedFileName: imageName }) => { dto.foto = imageName; })
  //       .catch((err) => { throw new BadRequestException('Error Upload Image'); });
  //   const databanner = await this.bbRepo.save({
  //     detailbengkel: { id: dto.bengkeldetail_id },
  //     foto: dto.foto
  //   });
  //   console.log(databanner);
  //   return databanner;
  // }

  // async updateSaveBanner(id: string, dto: BannerBengkelDto) {
  //   console.log(dto);
  //   const data_banner = await this.bbRepo.findOne(id);
  //   if (data_banner.foto === dto.foto) {
  //     dto.foto = data_banner.foto; console.log('data tidak diupdate')
  //   } else {
  //     this.fileService.delete(data_banner.foto, 'banner-bengkel');
  //     if (dto.foto)
  //       await this.fileService.uploadImage(dto.foto, 'banner-bengkel')
  //         .then(({ hashedFileName: imageName }) => { dto.foto = imageName; })
  //         .catch((err) => { throw new BadRequestException('Error Upload Image'); });
  //   }
  //   dto.id = id;
  //   const databanner = await this.bbRepo.save({
  //     id: dto.id,
  //     detailbengkel: { id: dto.bengkeldetail_id },
  //     foto: dto.foto
  //   });
  //   console.log(databanner);
  //   return databanner;
  // }
  // async convertToFile(file) {
  //   const frombase64 = Buffer.from(file, 'base64')
  //   const fs = require('fs')
  //   const findExtension = await this.fileHeader(file)
  //   const imagePath = `./pics/layanan-bengkel/`;
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

  // async convertToFileBanner(file) {
  //   const frombase64 = Buffer.from(file, 'base64')
  //   const fs = require('fs')
  //   const findExtension = await this.fileHeader(file)
  //   const imagePath = `./pics/banner-bengkel/`;
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
}
