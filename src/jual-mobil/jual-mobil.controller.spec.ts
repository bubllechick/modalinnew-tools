import { Test, TestingModule } from '@nestjs/testing';
import { JualMobilController } from './jual-mobil.controller';
import { JualMobilService } from './jual-mobil.service';

describe('JualMobilController', () => {
  let controller: JualMobilController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JualMobilController],
      providers: [JualMobilService],
    }).compile();

    controller = module.get<JualMobilController>(JualMobilController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
