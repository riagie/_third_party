import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

import ConfigService from "./config/configuration";

dotenv.config();
const config = ConfigService();

let AppDataSource: DataSource | undefined;

(async () => {
  if (config.database.adapter) {
    try {
      AppDataSource = await new DataSource({
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
    } catch (error) {
      console.error(
        "An error occurred while creating the application data source:",
        error.message,
      );
    }
  }
})();

export { AppDataSource };
