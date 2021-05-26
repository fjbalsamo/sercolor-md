import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import xmlToJson from './xml2json';
import obtenerClientesXML from './api/obtenerClientes.xml';
import testingXML from './api/testing.xml';

@Controller()
export class AppController {
  private platformBaseURL = 'http://localhost:8080';
  private xmlRequest: AxiosInstance;

  constructor() {
    this.xmlRequest = axios.create({
      baseURL: 'http://localhost:8080',
      headers: {
        'Content-Type': 'text/xml',
      },
    });
  }

  @HttpCode(HttpStatus.OK)
  @Get('/customers')
  async getCustomes(): Promise<{ data: any; status: number }> {
    try {
      const { data, status } = await this.xmlRequest.post<string>(
        '/ServicioCCOCliente.asmx',
        obtenerClientesXML,
      );
      return {
        status,
        data: xmlToJson(data),
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
