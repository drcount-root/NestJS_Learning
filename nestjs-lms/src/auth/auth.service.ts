import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterUserDto } from './dto/registerUser.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  registerUser(registerUserDto: RegisterUserDto) {
    console.log(registerUserDto);
    return this.userService.createUser();
  }
}
