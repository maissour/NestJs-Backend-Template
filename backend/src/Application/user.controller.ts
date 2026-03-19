import { Controller, Get, Param, Inject } from '@nestjs/common';
import type { IUserService } from '@/Service/Interfaces/user.service.interface';
import { USER_SERVICE } from '@/common/tokens';

@Controller('users')
export class UserController {
  constructor(
    @Inject(USER_SERVICE)
    private readonly userService: IUserService
  ) {}

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return this.userService.getUserById(Number(id));
  }
}