import { Test, TestingModule } from '@nestjs/testing';
import { UlasanMobilController } from './ulasan-mobil.controller';
import { UlasanMobilService } from './ulasan-mobil.service';

describe('UlasanMobilController', () => {
  let controller: UlasanMobilController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UlasanMobilController],
      providers: [UlasanMobilService],
    }).compile();

    controller = module.get<UlasanMobilController>(UlasanMobilController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
