import { Test, TestingModule } from '@nestjs/testing';
import { JualMotorController } from './jual-motor.controller';
import { JualMotorService } from './jual-motor.service';

describe('JualMotorController', () => {
  let controller: JualMotorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JualMotorController],
      providers: [JualMotorService],
    }).compile();

    controller = module.get<JualMotorController>(JualMotorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
