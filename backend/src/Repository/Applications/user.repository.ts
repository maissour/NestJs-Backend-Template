import { Injectable } from '@nestjs/common';
import { IUserRepository } from '@/Repository/Interfaces/user.repository.interface';
import { User } from '@/Domain/user.entity';
import { PrismaService } from '../../../prisma/prisma.service'

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private prismaService: PrismaService) {}

  async findById(id: number): Promise<User | null> {
    const user = await this.prismaService.user.findUnique({
      where: { id },
    });

    if (!user) return null;

    return new User(user.id, user.name, user.email);
  }
}