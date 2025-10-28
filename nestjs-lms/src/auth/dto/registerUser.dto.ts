import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterUserDto {
  @ApiProperty({ example: 'John' })
  @IsString()
  fname: string;

  @ApiProperty({ example: 'Doe' })
  @IsString()
  lname: string;

  @ApiProperty({ example: 'john@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'StrongP@ss123' })
  @IsString()
  @MinLength(8)
  password: string;
}
