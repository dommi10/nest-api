import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async signup(dto: UserDto) {
    const hashpass = await argon.hash(dto.password);

    return await this.userRepository.save({
      firstName: dto.firstName,
      lastName: dto.lastName,
      password: hashpass,
      username: dto.username,
    });
  }

  login() {
    return {};
  }
}
