import { Controller, Get, Post } from '@nestjs/common';

@Controller('api/v1/users') //đây là router
export class UserController {
  @Get() //decorator method sử http
  getAllUser() {
    return [
      {
        id: 1,
        name: 'bui van vu',
      },
      {
        id: 2,
        name: 'bui van nhan',
      },
      {
        id: 3,
        name: 'bui van dong',
      },
    ];
  }
  @Get('/:id')
  getById() {
    return {
      id: 1,
      name: 'bui van vu',
    };
  }

  @Post('/:id')
  createUser() {
    return 'create user';
  }
}
