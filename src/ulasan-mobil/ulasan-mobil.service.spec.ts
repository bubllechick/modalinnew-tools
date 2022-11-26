import { Test, TestingModule } from '@nestjs/testing';
import { UlasanMobilService } from './ulasan-mobil.service';

describe('UlasanMobilService', () => {
  let service: UlasanMobilService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UlasanMobilService],
    }).compile();

    service = module.get<UlasanMobilService>(UlasanMobilService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
