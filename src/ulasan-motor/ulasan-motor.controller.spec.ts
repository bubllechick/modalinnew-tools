import { Test, TestingModule } from '@nestjs/testing';
import { UlasanMotorController } from './ulasan-motor.controller';
import { UlasanMotorService } from './ulasan-motor.service';

describe('UlasanMotorController', () => {
  let controller: UlasanMotorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UlasanMotorController],
      providers: [UlasanMotorService],
    }).compile();

    controller = module.get<UlasanMotorController>(UlasanMotorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
