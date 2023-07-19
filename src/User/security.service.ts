/* eslint-disable prettier/prettier */
import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';

@Injectable()
export class SecurityService {
    constructor( @Inject(forwardRef(() => UserService)) private userService: UserService){}
}