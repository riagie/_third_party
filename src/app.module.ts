import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppsModule } from "./app/app.module";
import { AppDataSource } from "./app.connection";
import configuration from "./config/configuration";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    ...(AppDataSource ? [TypeOrmModule.forRoot(AppDataSource.options)] : []),
    AppsModule,
  ],
})
export class AppModule {}
