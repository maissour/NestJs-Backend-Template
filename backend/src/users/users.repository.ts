import { UserDto } from '@/dto/users.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsersRepository {
    constructor(private prismaService: PrismaService) {}

    async getAllUsers(){
        const users = await this.prismaService.user.findMany();
        return users;
    }

    async getUserByEmail(email: string): Promise<UserDto | null>{
        const user = await this.prismaService.user.findUnique({
            where:{
                email: email
            } 
        });

        if(!user){
            return null;
        }

        const userModel: UserDto = {
            id: user.id,
            name: user.name,
            email: user.email
        }
        return userModel;
    }

    async validatePassword(email: string,inputPassword: string): Promise<boolean | null>{
        const user = await this.prismaService.user.findUnique({
            where: {
                email: email
            }
        });

        if(!user){
            return null;
        }

        const validPassword = user.password == inputPassword;
        return validPassword;
    }
}
