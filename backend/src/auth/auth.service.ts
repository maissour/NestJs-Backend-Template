import { AuthResposnse, LoginDto, UserDto } from '@/dto/users.dto';
import { UsersService } from '@/users/users.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwt: JwtService) {}
    
    async authenticate(input: LoginDto): Promise<AuthResposnse | null>{
        if(input.email == '' || input.password == ''){
            return null;
        }
        const user = await this.validateUser(input.email, input.password);

        if(!user){
            return null;
        }

        const payloadToken = {
            userId: user.id,
            name: user.name
        }

        const token = await this.jwt.signAsync(payloadToken);
        const response: AuthResposnse = {
            accessToken: token,
            userId: user.id,
            name: user.name
        }

        return response;
    }

    async validateUser(email: string, password: string): Promise<UserDto | null>{
        const user = await this.usersService.getUserByEmail(email);
        if(!user){
            return null;
        }

        const isValidPassword = await this.usersService.validatePassword(email, password);

        if(!isValidPassword){
            return null;
        }

        return user;
    }
}
