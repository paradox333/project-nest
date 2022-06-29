import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import { Users } from './users';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(private readonly userService: UsersService) {}

  @Post()
  public async create(@Body() userDto: any): Promise<Users> {
    return await this.userService.create(userDto);
  }

}