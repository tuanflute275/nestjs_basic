/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserService } from './user.service';
import { plainToClass } from 'class-transformer';
import { LoggerService } from 'src/logger/logger.servie';

@Controller('user')
export class UserController {
  constructor(
    private readonly user: UserService,
    private logger: LoggerService
  ) { 
    console.log(user.getLogger() === logger);
    
  }

  @Get()
  test() {
    return this.logger.log()
  }

  // @Get()
  // getUsers(): void {
  //   this.user.getUser()
  // }

  // @Get(':id')
  // getUserById(@Param('id') id: number): any{
  //   this.user.getById(id)
  // }

  @Post()
  createUser(@Body() userDto: UserDto) {
    return plainToClass(UserDto, this.user.postUser(userDto), { excludeExtraneousValues: true })
  }

  @Put(':id')
  updateUser(@Param('id') id: number) {
    this.user.updateUser(id)
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number): void {
    this.user.deleteUser(id)
  }

}