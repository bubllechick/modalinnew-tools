import { Test, TestingModule } from '@nestjs/testing';
import { KomunitasService } from './komunitas.service';

describe('KomunitasService', () => {
  let service: KomunitasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KomunitasService],
    }).compile();

    service = module.get<KomunitasService>(KomunitasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
