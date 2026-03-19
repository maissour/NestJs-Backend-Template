// src/service/user.service.ts
import { Inject, Injectable } from '@nestjs/common';
import { IUserService } from '@/Service/Interfaces/user.service.interface';
import type { IUserRepository } from '@/Repository/Interfaces/user.repository.interface';
import { User } from '@/Domain/user.entity';
import { USER_REPOSITORY } from '@/common/tokens';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository
  ) {}

  async getUserById(id: number): Promise<User> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}