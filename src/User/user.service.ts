/* eslint-disable prettier/prettier */
import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { UserDto } from './user.dto';
import { StoreService } from 'src/store/store.service';
import { LoggerService } from 'src/logger/logger.servie';
import { SecurityService } from './security.service';

@Injectable()
export class UserService {

  constructor(
    @Inject('STORE_SERVICEuser.json') private readonly store: StoreService,
    private logger: LoggerService,
    @Inject(forwardRef(() => SecurityService)) private readonly securityService: SecurityService
  ) { }

  getLogger() {
    return this.logger;
  }

  getUser(): void {
    console.log('đay la get user');
  }

  getById(id: number): void {
    console.log('get id ', id)
  }

  postUser(data: any): UserDto {
    this.store.save(data);
    return data;
  }

  updateUser(id: number): void {
    console.log('update id ', id);
  }

  deleteUser(id: number): void {
    console.log('delete id ', id);
  }
}