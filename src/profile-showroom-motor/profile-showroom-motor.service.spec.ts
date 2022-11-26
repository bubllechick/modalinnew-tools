import { Test, TestingModule } from '@nestjs/testing';
import { ProfileShowroomMotorService } from './profile-showroom-motor.service';

describe('ProfileShowroomMotorService', () => {
  let service: ProfileShowroomMotorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfileShowroomMotorService],
    }).compile();

    service = module.get<ProfileShowroomMotorService>(ProfileShowroomMotorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
