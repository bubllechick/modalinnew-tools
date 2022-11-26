import { Module } from '@nestjs/common';
import { KomunitasService } from './komunitas.service';
import { KomunitasController } from './komunitas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Komunita } from './entities/komunita.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Komunita])
  ],
  controllers: [KomunitasController],
  providers: [KomunitasService]
})
export class KomunitasModule { }
