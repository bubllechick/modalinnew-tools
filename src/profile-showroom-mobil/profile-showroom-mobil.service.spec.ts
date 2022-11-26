import { Test, TestingModule } from '@nestjs/testing';
import { ProfileShowroomMobilService } from './profile-showroom-mobil.service';

describe('ProfileShowroomMobilService', () => {
  let service: ProfileShowroomMobilService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfileShowroomMobilService],
    }).compile();

    service = module.get<ProfileShowroomMobilService>(ProfileShowroomMobilService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
