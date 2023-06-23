import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { UserSchema } from './users/user.model'; // UserModel import

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService, UserSchema], // UserModel을 providers 배열에 추가
})
export class AppModule {}
