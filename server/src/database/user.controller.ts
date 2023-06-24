import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';
import { CreateUserDto } from './user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    console.log('잘 작동하는지 확인');
    return this.userService.getUsers();
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    const { firstname, lastname } = createUserDto;
    return this.userService.createUser(firstname, lastname);
  }
}
