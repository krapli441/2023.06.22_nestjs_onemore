import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './app.service';
import { CreateUserDto } from './createUser.dto';
import { User } from './mongo';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    const { firstName, lastName } = createUserDto;
    return this.userService.createUser(firstName, lastName);
  }
  @Get()
  async findAllUsers(): Promise<User[]> {
    return this.userService.findAllUsers();
  }
}

// /users 경로로 POST 요청이 들어오면 createUser 메서드가 실행되고
// GET 요청이 들어오면 findAllUsers 메서드가 실행된다.
