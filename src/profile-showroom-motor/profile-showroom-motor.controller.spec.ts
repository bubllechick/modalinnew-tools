import { Test, TestingModule } from '@nestjs/testing';
import { ProfileShowroomMotorController } from './profile-showroom-motor.controller';
import { ProfileShowroomMotorService } from './profile-showroom-motor.service';

describe('ProfileShowroomMotorController', () => {
  let controller: ProfileShowroomMotorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfileShowroomMotorController],
      providers: [ProfileShowroomMotorService],
    }).compile();

    controller = module.get<ProfileShowroomMotorController>(ProfileShowroomMotorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
