import { Controller, Get, Post } from "@nestjs/common";

import { Response } from "./app.response";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Post()
  index(): Response<string> {
    return this.appService.index();
  }
}
