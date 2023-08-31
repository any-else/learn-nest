import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';
import { LoggingInterceptor } from '../../inteceptors/logging.interceptor';
import { AuthGuard } from '../../guards/auth.guards';

@Controller('api/v1/users') //đây là router
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUser() {
    return this.userService.findAll();
  }

  @Post()
  async createUser(@Body() body: UserDTO) {
    console.log('body', body);
    return this.userService.create(body);
  }
  //get
  @UseInterceptors(ClassSerializerInterceptor)
  @UseInterceptors(LoggingInterceptor)
  @UseGuards(AuthGuard)
  @Get(':id')
  async getUserById(@Param('id') id: number) {
    console.log('vào controller');
    try {
      return this.userService.findOne(id);
    } catch (error) {
      throw new NotFoundException('User not found');
    }
  }
  //path
  @Patch(':id')
  async editUserById(@Param('id') id: number | string, @Body() body: UserDTO) {
    try {
      //check id not exits

      //goi den service
      return this.userService.updateById(id, body);
    } catch (error) {
      throw new NotFoundException('User not found');
    }
  }

  //Delete
  @Delete(':id')
  removeUser(@Param('id') id: string | number) {
    console.log('id', id);
    return this.userService.deleteById(id);
  }

  @Get('*')
  notFound() {
    return 'Not Found';
  }
}
