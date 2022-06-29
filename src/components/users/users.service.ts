import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}

  public async create(userDto: any): Promise<Users> {
    const user = new Users();
    user.email = userDto.email;
    user.password = userDto.password;
    return this.userRepository.save(user);
  }
}