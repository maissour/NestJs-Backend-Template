import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { UserDto } from '@/dto/users.dto';

@Injectable()
export class UsersService {
    constructor(private usersRepository: UsersRepository) {}

    async getAllUsers(){
        return await this.usersRepository.getAllUsers();
    }

    async getUserByEmail(email: string): Promise<UserDto | null>{
        return await this.usersRepository.getUserByEmail(email);
    }

    async validatePassword(email: string,inputPassword: string): Promise<boolean | null>{
        return await this.usersRepository.validatePassword(email, inputPassword);
    }
}
