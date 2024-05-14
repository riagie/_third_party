import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

import ConfigService from "./config/configuration";

dotenv.config();
const config = ConfigService();

let AppDataSource: DataSource | undefined;

if (config.database.adapter) {
  AppDataSource = new DataSource({
    type: "mysql",
    host: config.database.host,
    port: config.database.port,
    username: config.database.username,
    password: config.database.password,
    database: config.database.database,
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
