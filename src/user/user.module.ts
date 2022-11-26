import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { JualMobil } from 'src/jual-mobil/entities/jual-mobil.entity';
import { JualMotor } from 'src/jual-motor/entities/jual-motor.entity';
import { FileService } from 'src/file/file.service';
import { JualMobilModule } from 'src/jual-mobil/jual-mobil.module';
import { JualMotorModule } from 'src/jual-motor/jual-motor.module';

@Module({
  imports: [
    JualMotorModule, JualMobilModule,
    TypeOrmModule.forFeature([User, JualMobil, JualMotor]),
  ],
  controllers: [UserController],
  providers: [UserService, FileService],
  exports: [UserService]
})
export class UserModule { }
