import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import xml2json from './xml2json';
import { ObtenerClientesDTO } from './api/obtenerClientes.dto';
import sanitizeCustomer, {
  ICustomerSanitized,
} from './parser/sanitize.customer';

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
    const xml = fs.readFileSync(
      path.join(__dirname, '../files/obtenerArticulos.xml'),
      'utf-8',
    );
    const { data } = await this.axiosInstance.post<string>(
      '/ServicioSTOCArticulo.asmx',
      xml,
    );
    const json = xml2json<any>(data);
    return json;
  }

  async requestCustomers(): Promise<ICustomerSanitized[]> {
    const xml = fs.readFileSync(
      path.join(__dirname, '../files/obtenerClientes.xml'),
      'utf-8',
    );
    const { data } = await this.axiosInstance.post<string>(
      '/ServicioCCOCliente.asmx',
      xml,
    );
    const json = xml2json<ObtenerClientesDTO>(data);
    const customers = sanitizeCustomer(json);
    return customers;
  }
}
