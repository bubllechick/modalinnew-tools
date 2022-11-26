import { Test, TestingModule } from '@nestjs/testing';
import { DataJualMotorService } from './data-jual-motor.service';

describe('DataJualMotorService', () => {
  let service: DataJualMotorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataJualMotorService],
    }).compile();

    service = module.get<DataJualMotorService>(DataJualMotorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
