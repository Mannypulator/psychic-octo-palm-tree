import { Module } from '@nestjs/common';
import { ClassifyNumberController } from './classify-number.controller';
import { ClassifyNumberService } from './classify-number.service';

@Module({
  controllers: [ClassifyNumberController],
  providers: [ClassifyNumberService]
})
export class ClassifyNumberModule {}
