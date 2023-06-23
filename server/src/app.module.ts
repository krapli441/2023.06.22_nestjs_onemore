import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// mongoDB 연결
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './mongo';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/mydb_park')],
  // MongoDB 접속 정보를 포함한 문자열을 전달한다.
  controllers: [AppController],
  providers: [AppService, User],
})
export class AppModule {}
