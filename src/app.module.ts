import { Module } from '@nestjs/common';
import { User } from './user/user.module';

@Module({
  imports: [User],
})
export class AppModule {}
