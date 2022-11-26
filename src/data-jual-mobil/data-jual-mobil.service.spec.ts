import { Test, TestingModule } from '@nestjs/testing';
import { DataJualMobilService } from './data-jual-mobil.service';

describe('DataJualMobilService', () => {
  let service: DataJualMobilService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataJualMobilService],
    }).compile();

    service = module.get<DataJualMobilService>(DataJualMobilService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
