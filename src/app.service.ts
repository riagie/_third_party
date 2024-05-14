import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { Response } from "./app.response";

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  index(): Response<string> {
    return {
      RC: 200,
      RCM: "SUCCESS",
      DATA: "BISMILLAH PASTI BISA",
    };
  }
}
