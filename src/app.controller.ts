import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ICustomerSanitized } from './parser/sanitize.customer';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @HttpCode(HttpStatus.OK)
  @Get('/readCustomers')
  async requestCustomers(): Promise<any> {
    try {
      const response = await this.appService.requestCustomers();
      return response;
    } catch (error) {
      console.log(error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @HttpCode(HttpStatus.OK)
  @Get('/readArticles')
  async requestArticles(): Promise<any> {
    try {
      const response = await this.appService.requestArticles();
      return response;
    } catch (error) {
      console.log(error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
