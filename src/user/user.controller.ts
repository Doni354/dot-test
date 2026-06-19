import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //  api register user
  @Post('register')
  create(@Body() body: any) {
    return this.userService.create(body);
  }

  // api view user
  @Get()
  findAll() {
    return this.userService.findAll();
  }
}
