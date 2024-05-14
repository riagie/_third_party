import { createConnection, ConnectionOptions } from "typeorm";
import { readdirSync, statSync } from "fs";
import { join, basename, extname } from "path";

import { AppDataSource } from "../app.connection";

interface DataJson {
  [key: string]: any;
}

const source = (directory: string, dataJson: string, files: string[]) => {
  readdirSync(directory).forEach((value) => {
    const items = join(directory, value);
    if (statSync(items).isDirectory()) {
      source(items, dataJson, files);
    } else if (value.endsWith(dataJson)) {
      files.push(items);
    }
  });
};

async function loadDatabase(): Promise<void> {
  let connection;
  const files: string[] = [];
  source(__dirname, ".data.json", files);

  if (files.length > 0) {
    for (const value of files) {
      const dataJson: DataJson[] = require(value);
      const tableName = basename(value, extname(value)).split(".")[0];
      const entityName = tableName.charAt(0).toUpperCase() + tableName.slice(1);
      const entity = (await import(`./entity/${tableName}.entity`))[entityName];

      connection = await createConnection({
        ...AppDataSource.options,
        entities: [entity],
      } as ConnectionOptions);

      const repository = connection.getRepository(entity);
      for (const data of dataJson) {
        let create = repository.create(data);
        try {
          await repository.save(repository.create(create));
        } catch (error) {
          console.error(
            `Error while loading data for ${tableName}: ${error.message}`,
          );
        }
      }

      if (connection) {
        await connection.close();
      }
    }
  }
}

loadDatabase();
