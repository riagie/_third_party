import { NestFactory } from "@nestjs/core";
import { ConfigService } from "@nestjs/config";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { join } from "path";
import { AppModule } from "./app.module";
import { ErrorMiddleware } from "./common/middleware/error.middleware";
import { LoggerMiddleware } from "./common/middleware/logger.middleware";
import compression from "@fastify/compress";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  app.use(new LoggerMiddleware().use);
  app.useGlobalFilters(new ErrorMiddleware());

  app.useStaticAssets({
    root: join(__dirname, "..", "public"),
    prefix: "/public/",
  });
  app.setViewEngine({
    engine: { handlebars: require("handlebars") },
    templates: join(__dirname, "..", "views"),
  });

  await app.register(compression);
  await app.listen(app.get(ConfigService).get("APP").PORT);

  console.log(await app.getUrl());
}
bootstrap();
