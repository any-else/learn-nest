import {
  MiddlewareConsumer,
  Module,
  NestModule,
  // RequestMethod,
} from '@nestjs/common';
import { UserController } from './user.contoller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './database/user.entity';
import { LoggerMiddleware } from '../../middlewares/logger.middleware';
import { testMiddleware } from '../../middlewares/test.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(testMiddleware, LoggerMiddleware)
      // .forRoutes({ path: 'api/v1/users/:id', method: RequestMethod.GET });
      .forRoutes(UserController);
  }
}
