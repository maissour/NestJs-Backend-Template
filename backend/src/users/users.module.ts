import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'prisma/prisma.service';
import { UsersRepository } from './users.repository';

@Module({
  providers: [UsersService,UsersRepository,PrismaService],
  controllers: [UsersController]
})
export class UsersModule {}
