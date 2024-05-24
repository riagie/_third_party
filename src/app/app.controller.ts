import { Controller, Get, Post, Query, Body, Req } from "@nestjs/common";
import { Res } from "./interfaces/app.interface";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
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
