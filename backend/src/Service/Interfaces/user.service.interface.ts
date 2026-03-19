import { User } from '@/Domain/user.entity';

export interface IUserService {
  getUserById(id: number): Promise<User>;
}