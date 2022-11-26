import { Test, TestingModule } from '@nestjs/testing';
import { KomentarProdukMotorController } from './komentar-produk-motor.controller';
import { KomentarProdukMotorService } from './komentar-produk-motor.service';

describe('KomentarProdukMotorController', () => {
  let controller: KomentarProdukMotorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KomentarProdukMotorController],
      providers: [KomentarProdukMotorService],
    }).compile();

    controller = module.get<KomentarProdukMotorController>(KomentarProdukMotorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
