import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
    constructor(private usersRepository: UsersRepository) {}

    async getAllUsers(){
        return await this.usersRepository.getAllUsers();
    }
}
