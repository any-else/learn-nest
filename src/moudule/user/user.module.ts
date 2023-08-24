import { Module } from '@nestjs/common';
import { UserController } from './user.contoller';
import { UserService } from './user.service';
import { UsersRepository } from './user.repository';

@Module({
  controllers: [UserController],
  providers: [UserService, UsersRepository],
})
export class UserModule {}
