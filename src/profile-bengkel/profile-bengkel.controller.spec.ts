import { Test, TestingModule } from '@nestjs/testing';
import { ProfileBengkelController } from './profile-bengkel.controller';
import { ProfileBengkelService } from './profile-bengkel.service';

describe('ProfileBengkelController', () => {
  let controller: ProfileBengkelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfileBengkelController],
      providers: [ProfileBengkelService],
    }).compile();

    controller = module.get<ProfileBengkelController>(ProfileBengkelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
