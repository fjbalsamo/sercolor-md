import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  HttpService,
  HttpException,
} from '@nestjs/common';
import obtenerClientesXML from './api/obtenerClientes.xml';

@Controller()
export class AppController {
  private platformBaseURL = 'http://localhost:8080';

  constructor(private readonly httpService: HttpService) {}

  @HttpCode(HttpStatus.OK)
  @Get('/customers')
  async getCustomes(): Promise<any> {
    try {
      const observable = await this.httpService.post(
        `${this.platformBaseURL}/ServicioCCOCliente.asmx`,
        obtenerClientesXML,
        {
          headers: {
            'Context-Type': 'text/xml; charset=utf-8',
          },
        },
      );
      return await observable.toPromise();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
