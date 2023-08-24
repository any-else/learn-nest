import { Module } from '@nestjs/common';
import { UserModule } from './moudule/user/user.module';
import { ProductModule } from './moudule/product/product.module';

@Module({
  imports: [UserModule, ProductModule],
  providers: [],
})
export class AppModule {}
