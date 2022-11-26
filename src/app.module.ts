import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { DanaTunaiModule } from './dana-tunai/dana-tunai.module';
import { JualMobilModule } from './jual-mobil/jual-mobil.module';
import { DataJualMobilModule } from './data-jual-mobil/data-jual-mobil.module';
import { JualMotorModule } from './jual-motor/jual-motor.module';
import { DataJualMotorModule } from './data-jual-motor/data-jual-motor.module';
import { User } from './user/entities/user.entity';
import { JualMobil } from './jual-mobil/entities/jual-mobil.entity';
import { DanaTunai } from './dana-tunai/entities/dana-tunai.entity';
import { JualMotor } from './jual-motor/entities/jual-motor.entity';
import { DataJualMobil } from './data-jual-mobil/entities/data-jual-mobil.entity';
import { DataJualMotor } from './data-jual-motor/entities/data-jual-motor.entity';
import { KreditModule } from './kredit/kredit.module';
import { Kredit } from './kredit/entities/kredit.entity';
import { AuthModule } from './auth/auth.module';
import { TwilioModule } from 'nestjs-twilio';
import { ExistValidator } from './etc/validator/exist-validator';
import { UniqueValidator } from './etc/validator/unique-validator';
import { KomentarProdukModule } from './komentar-produk/komentar-produk.module';
import { KomentarProduk } from './komentar-produk/entities/komentar-produk.entity';
import { KomunitasModule } from './komunitas/komunitas.module';
import { Komunita } from './komunitas/entities/komunita.entity';
import { ProfileSalesModule } from './profile-sales/profile-sales.module';
import { ProfileShowroomMobilModule } from './profile-showroom-mobil/profile-showroom-mobil.module';
import { ProfileShowroomMotorModule } from './profile-showroom-motor/profile-showroom-motor.module';
import { ProfileBengkelModule } from './profile-bengkel/profile-bengkel.module';
import { KomentarProdukMotorModule } from './komentar-produk-motor/komentar-produk-motor.module';
import { KomentarProdukMotor } from './komentar-produk-motor/entities/komentar-produk-motor.entity';
import { UlasanMobilModule } from './ulasan-mobil/ulasan-mobil.module';
import { UlasanMotorModule } from './ulasan-motor/ulasan-motor.module';
import { UlasanMobil } from './ulasan-mobil/entities/ulasan-mobil.entity';
import { UlasanMotor } from './ulasan-motor/entities/ulasan-motor.entity';
import { FavoriteModule } from './favorite/favorite.module';
import { Favorite } from './favorite/entities/favorite.entity';
import { DeskripsiMotor } from './jual-motor/entities/deskripsi-motor.entity';
import { DeskripsiMobil } from './jual-mobil/entities/deskripsi-mobil.entity';
import { FavoriteMobil } from './favorite/entities/favorite-mobil.entity';
import { FavoriteMotor } from './favorite/entities/favorite-motor.entity';
import { DokumenMotor } from './data-jual-motor/entities/data-dokumen.entity';
import { GaleriMotor } from './data-jual-motor/entities/data-galeri.entity';
import { DokumenMobil } from './data-jual-mobil/entities/data-dokumen-mobil.entity';
import { GaleriMobil } from './data-jual-mobil/entities/data-galeri-mobil.entity';
import { LayananBengkel, RatingBengkel } from './profile-bengkel/entities/bengkel.entity';
import { DetailBengkel } from './profile-bengkel/entities/detail-bengkel.entity';
import { FileModule } from './file/file.module';
import { v4 as uuid } from 'uuid';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TwilioModule.forRoot({
      accountSid: process.env.TWILIO_ACCOUNT_SID,
      authToken: process.env.TWILIO_AUTH_TOKEN,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASS,
      database: process.env.MYSQL_DB,
      wait_timeout: 60000,
      entities: [
        User,
        DanaTunai,
        JualMobil,
        JualMotor,
        DataJualMobil,
        DataJualMotor,
        DanaTunai,
        Kredit,
        KomentarProduk,
        Komunita,
        KomentarProdukMotor,
        UlasanMobil,
        UlasanMotor,
        Favorite,
        DeskripsiMotor,
        DeskripsiMobil,
        FavoriteMobil,
        FavoriteMotor,
        DokumenMotor,
        GaleriMotor,
        DokumenMobil,
        GaleriMobil,
        LayananBengkel,
        DetailBengkel,
        RatingBengkel
      ],
      synchronize: true
    }),
    UserModule,
    DanaTunaiModule,
    JualMobilModule,
    DataJualMobilModule,
    JualMotorModule,
    DataJualMotorModule,
    KreditModule,
    AuthModule,
    KomentarProdukModule,
    KomunitasModule,
    ProfileSalesModule,
    ProfileShowroomMobilModule,
    ProfileShowroomMotorModule,
    ProfileBengkelModule,
    KomentarProdukMotorModule,
    UlasanMobilModule,
    UlasanMotorModule,
    FavoriteModule,
    FileModule
  ],
  controllers: [AppController],
  providers: [AppService, ExistValidator, UniqueValidator],
})
export class AppModule { }
