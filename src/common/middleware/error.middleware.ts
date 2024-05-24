import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from "@nestjs/common";
import { logger } from "./logger.middleware";
import ConfigService from "../../config/configuration";
import os from "os";

const config = ConfigService();

@Catch()
export class ErrorMiddleware implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const http = host.switchToHttp();
    const response = http.getResponse();
    let status = HttpStatus.INTERNAL_SERVER_ERROR;

    if (exception.getStatus) {
      status = exception.getStatus();
    } else if (logger) {
      logger.error({
        hostname: os.hostname(),
        msg: exception,
      });
    }

    const responseData = { RC: status, RCM: HttpStatus[status] };

    if (config.APP.DEBUG) {
      responseData["DATA"] =
        exception.response?.message || exception.message || exception;
    }

    response.status(status).send(responseData);
  }
}
