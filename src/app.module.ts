import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import configuration from "./config/configuration";
import { AppService } from "./app.service";
import { AppController } from "./app.controller";
import { AppDataSource } from "./app.connection";
import { BaseModule } from "./app/base.module";

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration] }),
    ...(AppDataSource ? [TypeOrmModule.forRoot(AppDataSource.options)] : []),
    BaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
