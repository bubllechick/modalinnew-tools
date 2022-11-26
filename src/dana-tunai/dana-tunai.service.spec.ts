import { Test, TestingModule } from '@nestjs/testing';
import { DanaTunaiService } from './dana-tunai.service';

describe('DanaTunaiService', () => {
  let service: DanaTunaiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DanaTunaiService],
    }).compile();

    service = module.get<DanaTunaiService>(DanaTunaiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
