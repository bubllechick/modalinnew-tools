import { Test, TestingModule } from '@nestjs/testing';
import { ProfileSalesService } from './profile-sales.service';

describe('ProfileSalesService', () => {
  let service: ProfileSalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfileSalesService],
    }).compile();

    service = module.get<ProfileSalesService>(ProfileSalesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
