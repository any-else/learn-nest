import { DiscountService } from './../discount/discount.service';
import { ProductService } from './product.service';
import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';

import { DiscountType } from '../../utils/discount';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './db/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  controllers: [ProductController],
  providers: [
    ProductService,
    //cách không dùng inject
    {
      provide: 'PercentageDiscountService',
      useFactory: () => {
        const discountType = DiscountType.PERCENTAGE;
        const discountValue = 10;
        return new DiscountService(discountType, discountValue);
      },
    },
    {
      provide: 'FixedDiscountService',
      useFactory: () => {
        const discountType = DiscountType.FIXED;
        const discountValue = 10;
        return new DiscountService(discountType, discountValue);
      },
    },
    //cách inject ở phía module
    // {
    //   provide: 'DiscountService',
    //   useFactory: (discountType: DiscountType, discountValue: number) => {
    //     return new DiscountService(discountType, discountValue);
    //   },
    //   inject: ['DiscountType', 'DiscountValue'],
    // },
    // {
    //   provide: 'DiscountType',
    //   useValue: DiscountType.PERCENTAGE,
    // },
    // {
    //   provide: 'DiscountValue',
    //   useValue: 10,
    // },
  ],
})
export class ProductModule {}
