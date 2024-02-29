import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  title: string;
  @IsString()
  content: string;
  // @IsUrl()
  image: string;
  // @IsInt()
  user_id: number;
}
