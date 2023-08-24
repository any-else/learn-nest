import { Injectable } from '@nestjs/common';

import { IUser } from './types/user';
import { UsersRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(public userRepository: UsersRepository) {}
  findOne(id: string) {
    // xử lý logic ở đây
    return this.userRepository.findOne(id);
  }

  findAll() {
    return this.userRepository.findAll();
  }
  create(data: IUser) {
    return this.userRepository.create(data);
  }
}
