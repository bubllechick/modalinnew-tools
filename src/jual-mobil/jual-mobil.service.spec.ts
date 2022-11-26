import { Test, TestingModule } from '@nestjs/testing';
import { JualMobilService } from './jual-mobil.service';

describe('JualMobilService', () => {
  let service: JualMobilService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JualMobilService],
    }).compile();

    service = module.get<JualMobilService>(JualMobilService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
