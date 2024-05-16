import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
dotenv.config();

import ConfigService from "./config/configuration";
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
    logging: true,
    logger: "file",
    entities: [__dirname + "/database/entity/**/*.entity{.ts,.js}"],
    migrations: [__dirname + "/migrations/**/*{.ts,.js}"],
    migrationsTableName: "migration_table",
  });
}

AppDataSource.initialize()
  .then(() => {})
  .catch((error) => console.error("Error initialize database", error));

export { AppDataSource };
