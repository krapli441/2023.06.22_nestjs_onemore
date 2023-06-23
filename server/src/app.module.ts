import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
