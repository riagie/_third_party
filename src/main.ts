import { NestFactory } from "@nestjs/core";
import { ConfigService } from "@nestjs/config";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";

import { ErrorMiddleware } from "./middleware/error.middleware";
import { LoggerMiddleware } from "./middleware/logger.middleware";
import { AppModule } from "./app.module";

async function bootstrap() {
  let debug = false;
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: false }),
  );

  const configService = app.get(ConfigService);
  const { port, host } = configService.get("application");

  if (process.env.NODE_ENV === "sandbox") {
    debug = true;
    app.use(new LoggerMiddleware().use);
  }

  app.useGlobalFilters(new ErrorMiddleware(debug));

  await app.listen(port, host);
}
bootstrap();
