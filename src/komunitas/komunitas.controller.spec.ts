import { Test, TestingModule } from '@nestjs/testing';
import { KomunitasController } from './komunitas.controller';
import { KomunitasService } from './komunitas.service';

describe('KomunitasController', () => {
  let controller: KomunitasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KomunitasController],
      providers: [KomunitasService],
    }).compile();

    controller = module.get<KomunitasController>(KomunitasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
