import { Injectable } from '@nestjs/common';

import { IUser } from './types/user';
import { UsersRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(public userRepository: UsersRepository) {
    //Service is creating its own dependencies
    //Không nên làm như thế này
  }
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
