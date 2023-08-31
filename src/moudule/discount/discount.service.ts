import { Inject, Injectable } from '@nestjs/common';
import {
  DiscountType,
  FixedDiscount,
  PercentageDiscount,
} from '../../utils/discount';

@Injectable()
export class DiscountService {
  constructor(
    @Inject('DISCOUNT_TYPE') private readonly discountType: DiscountType,
    @Inject('DISCOUNT_VALUE') private readonly discountValue: number,
  ) {}
  calculateDiscount(price: number): number {
    if (this.discountType == DiscountType.PERCENTAGE) {
      const percentageDiscount = new PercentageDiscount(this.discountValue);
      return percentageDiscount.apply(price);
    } else if (this.discountType == DiscountType.FIXED) {
      const fixedDiscount = new FixedDiscount(this.discountValue);
      return fixedDiscount.apply(price);
    }
  }
}
