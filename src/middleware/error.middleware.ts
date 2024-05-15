import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from "@nestjs/common";
import { FastifyReply } from "fastify";

import { logger } from "./logger.middleware";

@Catch()
export class ErrorMiddleware implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    const http = host.switchToHttp();
    const response = http.getResponse<FastifyReply>();

    try {
      status = exception.getStatus();
    } catch (error) {
      logger.error({
        hostname: require("os").hostname(),
        msg: exception,
      });
    }

    const responseData = {
      RC: status,
      RCM: HttpStatus[status],
    };

    if (process.env.NODE_ENV === "sandbox") {
      const message = exception.response.message
        ? exception.response.message
        : exception;
      responseData["DATA"] = message;
    }

    response.status(status).send(responseData);
  }
}
