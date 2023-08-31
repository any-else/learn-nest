import { IsInt, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
//build ra decorator thuộc tính base  dùng chung
function CommonDecorator(min: number, max: number) {
  return function (target: any, key: string) {
    MinLength(min, {
      message: `${key} is too short`,
    })(target, key);
    MaxLength(max, {
      message: `${key} is too long`,
    })(target, key);
    // Thêm các decorator chung khác
  };
}

export class ProductDTO {
  @IsNotEmpty()
  _id: string;
  @CommonDecorator(10, 20)
  name: string;
  @IsInt()
  @IsNotEmpty()
  price: number;
  @IsNotEmpty()
  description: string;
}
