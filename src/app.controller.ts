import { Controller, Get, Post } from "@nestjs/common";

import { Res } from "./interface/app.interface";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Post()
  async index(): Promise<Res<any>> {
    const data = await this.appService.index();
    const res = {
      RC: 200,
      RCM: "SUCCESS",
      DATA: data,
    };

    return res;
  }
}
