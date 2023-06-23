import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}


// /users 경로로 POST 요청이 들어오면 createUser 메서드가 실행되고
// GET 요청이 들어오면 findAllUsers 메서드가 실행된다.