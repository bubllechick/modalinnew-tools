import { Test, TestingModule } from '@nestjs/testing';
import { DanaTunaiController } from './dana-tunai.controller';
import { DanaTunaiService } from './dana-tunai.service';

describe('DanaTunaiController', () => {
  let controller: DanaTunaiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DanaTunaiController],
      providers: [DanaTunaiService],
    }).compile();

    controller = module.get<DanaTunaiController>(DanaTunaiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
