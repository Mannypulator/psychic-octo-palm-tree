import { Test, TestingModule } from '@nestjs/testing';
import { ClassifyNumberService } from './classify-number.service';

describe('ClassifyNumberService', () => {
  let service: ClassifyNumberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassifyNumberService],
    }).compile();

    service = module.get<ClassifyNumberService>(ClassifyNumberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
