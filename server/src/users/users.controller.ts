import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAllUsers(): Promise<User[]> {
    return this.usersService.findAllUsers();
  }

  // 다른 라우트 핸들러들...
}
