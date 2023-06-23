import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
export class UserService {
  constructor(@InjectModel('users') private userModel: Model<users>) {}

  // 사용할 모델을 주입받는다. 'User'는 MongoDB의 컬렉션 이름이다.

  async createUser(userDto: CreateUserDto): Promise<users> {
    const createdUser = new this.userModel(userDto);
    return createdUser.save();
  }

  async findAllUsers(): Promise<users[]> {
    return this.userModel.find().exec();
  }
}
