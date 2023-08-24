import { MaxLength, MinLength } from 'class-validator';

export class UserDTO {
  @MinLength(10, {
    message: 'UserName is too short',
  })
  @MaxLength(50, {
    message: 'UserName is too long',
  })
  username: string;

  @MinLength(10, {
    message: 'UserName is too short',
  })
  password: string;
}
