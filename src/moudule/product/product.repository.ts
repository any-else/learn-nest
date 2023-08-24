import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';

@Injectable()
export class ProductRepository {
  async getAll() {
    const data = await readFile('src/moudule/product/db/product.json', 'utf-8');
    const dataConvert = JSON.parse(data);
    return {
      message: 'oke',
      products: dataConvert,
    };
  }
}
