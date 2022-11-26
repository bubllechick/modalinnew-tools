import { Test, TestingModule } from '@nestjs/testing';
import { UlasanMotorService } from './ulasan-motor.service';

describe('UlasanMotorService', () => {
  let service: UlasanMotorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UlasanMotorService],
    }).compile();

    service = module.get<UlasanMotorService>(UlasanMotorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
