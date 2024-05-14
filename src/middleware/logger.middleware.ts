import { Injectable, NestMiddleware } from "@nestjs/common";
import { FastifyRequest, FastifyReply } from "fastify";
import { createLogger, transports, format } from "winston";

export const logger = createLogger({
  level: "info",
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new transports.File({ filename: "logs/error.log", level: "error" }),
    new transports.File({ filename: "logs/combined.log" }),
  ],
});

interface RequestData {
  method: string;
  protocol: string;
  hostname: string;
  url: string;
  query: any;
  body: any;
  remoteAddress: string;
  remotePort: number;
}

interface ResponseData {
  statusCode: number;
}

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: FastifyRequest, res: FastifyReply, next: () => void): void {
    const start = process.hrtime();
    const requestId = `req-${Math.floor(Math.random() * 10000)}`;

    const requestData: RequestData = {
      method: req.method,
      protocol: req.protocol,
      hostname: req.hostname,
      url: req.url,
      query: req.query,
      body: req.body,
      remoteAddress: req.ip,
      remotePort: req.connection.remotePort,
    };

    const elapsed = process.hrtime(start);
    const responseTime = (elapsed[0] * 1000 + elapsed[1] / 1000000).toFixed(3);

    const responseData: ResponseData = {
      statusCode: res.statusCode,
    };

    logger.info({
      time: Date.now(),
      pid: process.pid,
      hostname: require("os").hostname(),
      reqId: requestId,
      req: requestData,
      res: responseData,
      responseTime: parseFloat(responseTime),
      msg: "",
    });

    next();
  }
}
