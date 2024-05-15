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
  const env = process.env.NODE_ENV.trim();
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: false }),
  );

  const listen = app.get(ConfigService);
  const { PORT, HOST } = listen.get("APPLICATION");

  app.useGlobalFilters(new ErrorMiddleware());
  if (env === "sandbox") {
    app.use(new LoggerMiddleware().use);
  }

  await app.listen(PORT, HOST);
}
bootstrap();
