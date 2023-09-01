import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Kia Ora This is my first NEST App, HELLO I am so excited! ALso I am struggling';
  }
}
