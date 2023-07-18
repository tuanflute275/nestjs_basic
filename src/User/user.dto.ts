/* eslint-disable prettier/prettier */
import { Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @IsString()
  @Length(5, 50)
  @Expose()
  name?: string;

  @IsNotEmpty()
  @IsEmail()
  @Expose()
  email?: string | null = '';

  @IsNotEmpty()
  @Length(5, 30)
  @Expose()
  password?: string;
}