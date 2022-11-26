import { Test, TestingModule } from '@nestjs/testing';
import { DataJualMotorController } from './data-jual-motor.controller';
import { DataJualMotorService } from './data-jual-motor.service';

describe('DataJualMotorController', () => {
  let controller: DataJualMotorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataJualMotorController],
      providers: [DataJualMotorService],
    }).compile();

    controller = module.get<DataJualMotorController>(DataJualMotorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
