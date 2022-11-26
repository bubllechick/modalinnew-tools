import { Test, TestingModule } from '@nestjs/testing';
import { ProfileShowroomMobilController } from './profile-showroom-mobil.controller';
import { ProfileShowroomMobilService } from './profile-showroom-mobil.service';

describe('ProfileShowroomMobilController', () => {
  let controller: ProfileShowroomMobilController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfileShowroomMobilController],
      providers: [ProfileShowroomMobilService],
    }).compile();

    controller = module.get<ProfileShowroomMobilController>(ProfileShowroomMobilController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
