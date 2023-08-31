import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/createPost.dto';

@Controller('api/v1/posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async getAllPost() {
    return this.postService.getAll();
  }
  @Post()
  async createPost(@Body() body: CreatePostDto) {
    return this.postService.create(body);
  }
  @Get(':id')
  async getPostById(@Param('id') id: string) {
    return this.postService.getById(id);
  }
}
