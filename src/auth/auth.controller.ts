import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/Signup')
  signup(@Body() dto: UserDto) {
    return this.authService.signup(dto);
  }

  @Post('/login')
  login() {
    return this.authService.login();
  }
}
