import { Module } from '@nestjs/common';
import { UserModule } from './moudule/user/user.module';

@Module({
  imports: [UserModule],
})
export class AppModule {}
