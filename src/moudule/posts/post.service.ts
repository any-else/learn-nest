import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from './db/post.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/createPost.dto';
@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}

  //get-all
  async getAll(): Promise<PostEntity[]> {
    return await this.postRepository.find();
  }
  async getAllPostByUser(): Promise<PostEntity[]> {
    return await this.postRepository.find({
      relations: ['user'],
      where: {
        user: {
          user_id: 1,
        },
      },
    });
  }
  //get-by-id
  async getById(id: string): Promise<PostEntity> {
    return await this.postRepository.findOneBy({
      post_id: id,
    });
  }
  //create
  async create(body: CreatePostDto): Promise<{
    message: string;
  }> {
    const newBody = { ...body, users_id: 1 };
    const newPost = this.postRepository.create(newBody);
    await this.postRepository.save(newPost);
    return {
      message: 'create successfully',
    };
  }
}
