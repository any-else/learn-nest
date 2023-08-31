import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';
import { DiscountService } from '../discount/discount.service';

@Controller('api/v1/product')
export class ProductController {
  constructor(
    private productService: ProductService,
    //useFactory ko cần inject
    @Inject('PercentageDiscountService')
    private readonly percentageDiscountService: DiscountService,
    @Inject('FixedDiscountService')
    private readonly fixedDiscountService: DiscountService, // using inject
  ) {}
  @Get()
  getAllProduct() {
    return this.productService.getAll();
  }
  @Get('/search')
  searchProduct(@Query() query: any) {
    console.log('query', query);
    return query;
  }
  @Get(':id')
  getProductById(@Param('id') id: string) {
    const originalPrice = 100;
    const discountPercentage =
      this.percentageDiscountService.calculateDiscount(originalPrice);
    const discountPriceFixed =
      this.fixedDiscountService.calculateDiscount(originalPrice);
    // const discountPercentage = this.discountService.calculateDiscount(
    //   originalPrice,
    //   DiscountType.PERCENTAGE,
    //   10,
    // );
    return {
      id: id,
      discountPercentage: discountPercentage,
      discountPriceFixed: discountPriceFixed,
    };
  }

  @Post()
  createProduct(@Body() body: ProductDTO) {
    console.log('body', body);
    return body;
  }

  @Patch(':id')
  updateProduct(@Param('id') id: string, @Body() body: any) {
    console.log('id', id);
    console.log('body', body);
    return {
      id,
      body,
    };
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    console.log('id', id);
    return id;
  }
}
