import { Test, TestingModule } from '@nestjs/testing';
import { ClassifyNumberController } from './classify-number.controller';

describe('ClassifyNumberController', () => {
  let controller: ClassifyNumberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClassifyNumberController],
    }).compile();

    controller = module.get<ClassifyNumberController>(ClassifyNumberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
