import { Test, TestingModule } from '@nestjs/testing';
import { DispenService } from './dispen.service';

describe('DispenService', () => {
  let service: DispenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DispenService],
    }).compile();

    service = module.get<DispenService>(DispenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
