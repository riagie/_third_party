import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

import ConfigService from "./config/configuration";

dotenv.config();
const config = ConfigService();

let AppDataSource: DataSource | undefined;

if (config.DATABASE.ADAPTER) {
  AppDataSource = new DataSource({
    type: "mysql",
    host: config.DATABASE.HOST,
    port: config.DATABASE.PORT,
    username: config.DATABASE.USERNAME,
    password: config.DATABASE.PASSWORD,
    database: config.DATABASE.DATABASE,
    synchronize: false,
    dropSchema: false,
    logging: false,
    logger: "file",
    entities: [__dirname + "/database/**/*.entity.ts"],
    migrations: [__dirname + "/migrations/**/*.ts"],
    migrationsTableName: "migration_table",
  });
}

export { AppDataSource };
