import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsersRepository {
    constructor(private prismaService: PrismaService) {}

    async getAllUsers(){
        const users = await this.prismaService.user.findMany();
        return users;
    }
}
