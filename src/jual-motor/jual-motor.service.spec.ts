import { Test, TestingModule } from '@nestjs/testing';
import { JualMotorService } from './jual-motor.service';

describe('JualMotorService', () => {
  let service: JualMotorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JualMotorService],
    }).compile();

    service = module.get<JualMotorService>(JualMotorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
