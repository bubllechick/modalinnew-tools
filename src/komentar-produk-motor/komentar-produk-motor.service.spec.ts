import { Test, TestingModule } from '@nestjs/testing';
import { KomentarProdukMotorService } from './komentar-produk-motor.service';

describe('KomentarProdukMotorService', () => {
  let service: KomentarProdukMotorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KomentarProdukMotorService],
    }).compile();

    service = module.get<KomentarProdukMotorService>(KomentarProdukMotorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
