import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { AppService } from './app.service';
import xmlToJson from './xml2json';
import obtenerClientesXML from './api/obtenerClientes.xml';
import testingXML from './api/testing.xml';
import { ObtenerClientesDTO } from './api/obtenerClientes.dto';

@Controller()
export class AppController {
  private platformBaseURL = 'http://localhost:8080';
  private xmlRequest: AxiosInstance;

  constructor(private readonly appService: AppService) {
    this.xmlRequest = axios.create({
      baseURL: 'http://localhost:8080',
      headers: {
        'Content-Type': 'text/xml',
      },
    });
  }

  @HttpCode(HttpStatus.OK)
  @Get('/readCustomers')
  async requestCustomers(): Promise<any> {
    try {
      const response = await this.appService.requestCustomers();
      return response;
    } catch (error) {
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
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @HttpCode(HttpStatus.OK)
  @Get('/customers')
  async getCustomes(): Promise<{ data: any; status: number }> {
    try {
      const { data, status } = await this.xmlRequest.post<string>(
        '/ServicioCCOCliente.asmx',
        obtenerClientesXML,
      );
      const customers = xmlToJson<ObtenerClientesDTO>(data);
      return {
        status,
        data: customers['soap:Envelope']['soap:Body'].ObtenerClientesResponse
          .ObtenerClientesResult.Clientes.Cliente,
      };
    } catch (error) {
      console.log(error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @HttpCode(HttpStatus.OK)
  @Get('/testing')
  async runTesting(): Promise<{ data: any; status: number }> {
    try {
      const { data, status } = await this.xmlRequest.post<string>(
        '/ServicioCCOCliente.asmx',
        testingXML,
      );
      return { data, status };
    } catch (error) {
      console.log(error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
