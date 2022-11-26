import { Module } from '@nestjs/common';
import { DanaTunaiService } from './dana-tunai.service';
import { DanaTunaiController } from './dana-tunai.controller';
import { DanaTunai } from './entities/dana-tunai.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([DanaTunai])
  ],
  controllers: [DanaTunaiController],
  providers: [DanaTunaiService]
})
export class DanaTunaiModule { }
