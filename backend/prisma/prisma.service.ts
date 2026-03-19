import { Injectable, OnModuleInit } from '@nestjs/common';
import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "@/generated/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    const connectionString = process.env.DATABASE_URL!;

    const adapter = new PrismaBetterSqlite3({
      url: connectionString,
    });

    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }
}