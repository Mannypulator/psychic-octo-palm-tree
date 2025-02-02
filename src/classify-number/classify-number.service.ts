import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ClassifyNumberService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async classifyNumber(num: number) {
    const prime = this.isPrime(num);
    const perfect = this.isPerfect(num);
    const armstrong = this.isArmstrong(num);
    const sumDigits = this.digitSum(num);
    const parity = num % 2 === 0 ? 'even' : 'odd';

    // Determine the properties array
    const properties: string[] = [];
    if (armstrong) properties.push('armstrong');
    properties.push(parity);

    // Get a fun fact from the Numbers API
    const baseUrl = this.configService.get<string>('NUMBER_API_BASE_URL');
    const url = `${baseUrl}/${num}/math`;
    let fun_fact = '';
    try {
      const response = await firstValueFrom(this.httpService.get(url));
      fun_fact = response.data;
    } catch (error) {
      fun_fact = 'Fun fact not available.';
    }

    return {
      number: num,
      is_prime: prime,
      is_perfect: perfect,
      properties,
      digit_sum: sumDigits,
      fun_fact,
    };
  }
  // Check if a number is prime
  private isPrime(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // Check if a number is perfect
  private isPerfect(num: number): boolean {
    if (num <= 0) return false;
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        sum += i;
        if (i !== num / i) {
          sum += num / i;
        }
      }
    }
    return sum === num && num !== 1;
  }

  // Check if a number is an Armstrong number
  private isArmstrong(num: number): boolean {
    const digits = num.toString().split('').map(Number);
    const power = digits.length;
    const sum = digits.reduce((acc, d) => acc + Math.pow(d, power), 0);
    return sum === num;
  }

  // Compute the digit sum
  private digitSum(num: number): number {
    return num
      .toString()
      .split('')
      .reduce((acc, digit) => acc + Number(digit), 0);
  }
}
