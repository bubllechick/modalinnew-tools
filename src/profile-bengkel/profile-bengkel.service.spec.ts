import { Test, TestingModule } from '@nestjs/testing';
import { ProfileBengkelService } from './profile-bengkel.service';

describe('ProfileBengkelService', () => {
  let service: ProfileBengkelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfileBengkelService],
    }).compile();

    service = module.get<ProfileBengkelService>(ProfileBengkelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
