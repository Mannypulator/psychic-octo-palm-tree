import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { ClassifyNumberService } from './classify-number.service';

@Controller('api')
export class ClassifyNumberController {
  constructor(private readonly numberService: ClassifyNumberService) {}

  @Get('classify-number')
  async classifyNumber(@Query('number') number: string) {
    if (!number || isNaN(Number(number))) {
      throw new BadRequestException({ number, error: true });
    }
    const num = Number(number);
    return this.numberService.classifyNumber(num);
  }
}
