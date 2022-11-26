import { Test, TestingModule } from '@nestjs/testing';
import { ProfileSalesController } from './profile-sales.controller';
import { ProfileSalesService } from './profile-sales.service';

describe('ProfileSalesController', () => {
  let controller: ProfileSalesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfileSalesController],
      providers: [ProfileSalesService],
    }).compile();

    controller = module.get<ProfileSalesController>(ProfileSalesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
