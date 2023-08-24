import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,

  // UsePipes,
  // ValidationPipe,
} from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('api/v1/users') //đây là router
export class UserController {
  constructor(public userService: UserService) {
    //DONT DO THIS ON REAL APP
    //USE DEPENDENCY INJECTION
  }

  @Get()
  getAllUser() {
    console.log('all user');
  }

  // @UsePipes(new ValidationPipe())
  @Post()
  createUser(@Body() body: UserDTO) {
    console.log('body', body);
    //BUI VAN VU SAY HEELO
    return {
      data: body,
    };
  }
  //get
  @Get(':id')
  getUserById(@Param('id') id: string) {
    console.log('id', typeof id);
    try {
      return this.userService.findOne(id as string);
    } catch (error) {
      throw new NotFoundException('User not found');
    }
  }
  // create

  // put
  @Put(':id')
  editUser() {}
  //path
  @Patch('id')
  editUserById() {}

  //Delete
  @Delete(':id')
  removeUser() {}

  @Get('*')
  notFound() {
    return 'Not Found';
  }
}

//decorator tìm hiểu
//tại sao lại không được làm cách trên
//nó liên quan tới 1 khái niệm => Inversion of Control

//cách giải quyết là dùng Depency Injection
//tại sao thằng Depecy Injection tồn tại
