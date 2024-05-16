import { NestFactory } from "@nestjs/core";
import { ConfigService } from "@nestjs/config";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";

import { AppModule } from "./app.module";
import { ErrorMiddleware } from "./middleware/error.middleware";
import { LoggerMiddleware } from "./middleware/logger.middleware";

async function bootstrap() {
  const logger = process.env.NODE_ENV.trim() === "sandbox";
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );

  const { PORT, HOST } = app.get(ConfigService).get("APPLICATION");

  app.useGlobalFilters(new ErrorMiddleware());
  logger && app.use(new LoggerMiddleware().use);

  await app.listen(PORT, HOST);
}
bootstrap();
