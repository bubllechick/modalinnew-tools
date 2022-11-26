import { Test, TestingModule } from '@nestjs/testing';
import { KomentarProdukController } from './komentar-produk.controller';
import { KomentarProdukService } from './komentar-produk.service';

describe('KomentarProdukController', () => {
  let controller: KomentarProdukController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KomentarProdukController],
      providers: [KomentarProdukService],
    }).compile();

    controller = module.get<KomentarProdukController>(KomentarProdukController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
