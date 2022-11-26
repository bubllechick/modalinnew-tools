import { Test, TestingModule } from '@nestjs/testing';
import { DataJualMobilController } from './data-jual-mobil.controller';
import { DataJualMobilService } from './data-jual-mobil.service';

describe('DataJualMobilController', () => {
  let controller: DataJualMobilController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataJualMobilController],
      providers: [DataJualMobilService],
    }).compile();

    controller = module.get<DataJualMobilController>(DataJualMobilController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
