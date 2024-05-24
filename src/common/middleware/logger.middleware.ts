import { Injectable, NestMiddleware } from "@nestjs/common";
import { createLogger, transports, format } from "winston";
import ConfigService from "../../config/configuration";
import * as os from "os";

const config = ConfigService();
const loggerTransports = [];
if (config.APP.LOG) {
  loggerTransports.push(
    new transports.File({ filename: "logs/error.log", level: "error" }),
    new transports.File({ filename: "logs/combined.log" })
  );
}

export const logger = config.APP.LOG
  ? createLogger({
      level: "info",
      format: format.json(),
      transports:
        loggerTransports.length > 0
          ? loggerTransports
          : [new transports.Console()],
    })
  : createLogger({
      level: "info",
      format: format.json(),
      transports: [new transports.Console()],
    });

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void): void {
    if (config.APP.DEBUG) {
      const startTime = Date.now();
      const requestData = `${req.method} ${req.protocol} ${req.hostname} ${req.url} ${startTime}`;
      res.on("finish", () => {
        const endTime = Date.now();
        const responseData = `${res.statusCode} ${endTime}`;
        logger.info({
          hostname: os.hostname(),
          req: requestData,
          res: responseData,
          responseTime: `${endTime - startTime}ms`,
        });
      });
    }

    next();
  }
}
