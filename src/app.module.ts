import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ClassifyNumberController } from './classify-number/classify-number.controller';
import { ClassifyNumberService } from './classify-number/classify-number.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), HttpModule],
  controllers: [ClassifyNumberController],
  providers: [ClassifyNumberService],
})
export class AppModule {}
