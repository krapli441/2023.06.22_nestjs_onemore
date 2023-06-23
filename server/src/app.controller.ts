import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './app.service';
import { CreateUserDto } from './app.service';
import { User } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('users')
export class userController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  async findAllUsers(): Promise<User[]> {
    return this.userService.findAllUsers();
  }
}


// /users 경로로 POST 요청이 들어오면 createUser 메서드가 실행되고
// GET 요청이 들어오면 findAllUsers 메서드가 실행된다.