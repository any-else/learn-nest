import {
  IsEnum,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ROLE } from '../database/user.entity';

export class UserDTO {
  @MinLength(10, {
    message: 'UserName is too short',
  })
  @MaxLength(50, {
    message: 'UserName is too long',
  })
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsEnum(ROLE, {
    message: 'Invalid role value',
  })
  role: ROLE = ROLE.USER; //a Xuyên Đà Nẵng đã từng chỉ(MongoDB)
}
