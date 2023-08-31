import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './database/user.entity';
import { UserDTO } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}
  //get-all
  async findAll(): Promise<UserEntity[]> {
    return await this.usersRepository.find();
  }

  //get-by-id
  async findOne(id: number): Promise<UserEntity> {
    return await this.usersRepository.findOneBy({
      user_id: id,
    });
  }

  //create
  async create(body: UserDTO): Promise<{
    message: string;
  }> {
    const newUser = this.usersRepository.create(body);
    console.log('newUser', newUser);
    await this.usersRepository.save(newUser);
    return {
      message: 'Create successfully',
    };
  }
  //update
  async updateById(
    id: number | string,
    body: UserDTO,
  ): Promise<{ message: string }> {
    try {
      await this.usersRepository.update(id, body);
      return {
        message: 'Update successfully',
      };
    } catch (error) {
      throw new NotFoundException('UPADTE ERROR', error);
    }
  }
  //delete
  async deleteById(id: number | string): Promise<{ message: string }> {
    try {
      await this.usersRepository.delete(id);
      return {
        message: 'Delete successfully',
      };
    } catch (error) {
      throw new NotFoundException('DELETE ERROR', error);
    }
  }
}
