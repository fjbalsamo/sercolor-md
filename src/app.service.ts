import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import * as fs from 'fs';
import xml2json from './xml2json';

@Injectable()
export class AppService {
  axiosInstance!: AxiosInstance;
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'http://localhost:8080',
      headers: {
        'Content-Type': 'text/xml',
      },
    });
  }

  async requestArticles(): Promise<any> {
    const xml = fs.readFileSync('./api/obtenerArticulos.xml', 'utf-8');
    const { data } = await this.axiosInstance.post<string>(
      '/ServicioSTOCArticulo.asmx',
      xml,
    );
    const json = xml2json<any>(data);
    return json;
  }

  async requestCustomers(): Promise<any> {
    const xml = fs.readFileSync('./api/obtenerClientes.xml', 'utf-8');
    const { data } = await this.axiosInstance.post<string>(
      '/ServicioCCOCliente.asmx',
      xml,
    );
    const json = xml2json<any>(data);
    return json;
  }
}
