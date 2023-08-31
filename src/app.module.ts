import { Module } from '@nestjs/common';
import { UserModule } from './moudule/user/user.module';
import { ProductModule } from './moudule/product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './moudule/user/database/user.entity';
import { ProductEntity } from './moudule/product/db/product.entity';
import { PostEntity } from './moudule/posts/db/post.entity';
import { PostModule } from './moudule/posts/post.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Vuvanbui@18',
      database: 'democonnectNest',
      entities: [UserEntity, ProductEntity, PostEntity],
      synchronize: true, //auto chay vao database
    }),
    UserModule,
    ProductModule,
    PostModule,
  ],
  providers: [],
})
export class AppModule {}
