import { Test, TestingModule } from '@nestjs/testing';
import { DispenController } from './dispen.controller';
import { DispenService } from './dispen.service';

describe('DispenController', () => {
  let controller: DispenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DispenController],
      providers: [DispenService],
    }).compile();

    controller = module.get<DispenController>(DispenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
