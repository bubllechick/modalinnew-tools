import { Test, TestingModule } from '@nestjs/testing';
import { KomentarProdukService } from './komentar-produk.service';

describe('KomentarProdukService', () => {
  let service: KomentarProdukService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KomentarProdukService],
    }).compile();

    service = module.get<KomentarProdukService>(KomentarProdukService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
