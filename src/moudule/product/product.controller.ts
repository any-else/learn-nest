import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('api/v1/product')
export class ProductController {
  constructor(private productService: ProductService) {}
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
    console.log('id', id);
    return id;
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
