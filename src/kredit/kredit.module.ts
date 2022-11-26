import { Module } from '@nestjs/common';
import { KreditService } from './kredit.service';
import { KreditController } from './kredit.controller';
import { Kredit } from './entities/kredit.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Kredit])
  ],
  controllers: [KreditController],
  providers: [KreditService]
})
export class KreditModule { }
