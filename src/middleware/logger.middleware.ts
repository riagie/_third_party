import { Injectable, NestMiddleware } from "@nestjs/common";
import { FastifyRequest, FastifyReply } from "fastify";
import { createLogger, transports, format } from "winston";

import { requestData, responseData } from "../interface/app.interface";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: FastifyRequest, res: FastifyReply, next: () => void): void {
    const start = process.hrtime();
    const requestId = `req-${Math.floor(Math.random() * 10000)}`;
    const requestData: requestData = {
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
    const responseData: responseData = { statusCode: res.statusCode };

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

export const logger = createLogger({
  level: "info",
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new transports.File({ filename: "logs/error.log", level: "error" }),
    new transports.File({ filename: "logs/combined.log" }),
  ],
});