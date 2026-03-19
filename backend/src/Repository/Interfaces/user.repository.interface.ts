import { User } from '@/Domain/user.entity';

export interface IUserRepository {
  findById(id: number): Promise<User | null>;
}