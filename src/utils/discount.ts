export enum DiscountType {
  FIXED = 'FIXED',
  PERCENTAGE = 'PERCENTAGE',
}

export class PercentageDiscount {
  constructor(private readonly percentage: number) {}
  apply(price: number): number {
    return price - (price * this.percentage) / 100;
  }
}

export class FixedDiscount {
  constructor(private readonly fixed: number) {}
  apply(price: number): number {
    return price - this.fixed;
  }
}
