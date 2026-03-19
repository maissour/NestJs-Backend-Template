import { Module } from '@nestjs/common';
import { UserController } from './Application/user.controller';
import { UserService } from './Service/Applications/user.service';
import { USER_REPOSITORY, USER_SERVICE } from './common/tokens';
import { PrismaService } from '../prisma/prisma.service'
import { UserRepository } from './Repository/Applications/user.repository';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    PrismaService,
    {
      provide: USER_REPOSITORY,
      useClass: UserRepository,
    },
    {
      provide: USER_SERVICE,
      useClass: UserService,
    },
  ],
})
export class AppModule {}
