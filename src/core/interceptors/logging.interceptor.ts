import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import * as dotenv from "dotenv";
dotenv.config();
import ConfigService from "../../config/configuration";

const config = ConfigService();

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();

    return next.handle().pipe(
      tap(() => {
        if (config.APP.DEBUG) {
          console.log(`Before... After... ${Date.now() - now}ms`);
        }
      })
    );
  }
}
