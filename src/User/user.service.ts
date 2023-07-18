/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';
import { StoreService } from 'src/store/store.service';

@Injectable()
export class UserService {
  
  constructor(private readonly store: StoreService) {}
    
  getUser(): void {
    console.log('đay la get user');
  }

  getById(id: number): void {
    console.log('get id ', id)
  }

  postUser(data: any): UserDto{
    this.store.save(data);
    return data;
  }

  updateUser(id: number): void{
    console.log('update id ', id);
  }

  deleteUser(id: number): void{
    console.log('delete id ', id);
  }
}