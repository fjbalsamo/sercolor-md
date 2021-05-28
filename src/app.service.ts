import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import xml2json from './xml2json';
import { ObtenerClientesDTO } from './dto/obtenerClientes.dto';
import { ObtenerArticulosDTO } from './dto/obtenerArticulos.dto';
import sanitizeCustomer, {
  ICustomerSanitized,
} from './parser/sanitize.customer';
import sanitizeArticle, {
  IArticleSanitizedGroup,
} from './parser/sanitize.article';

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

  async requestArticles(): Promise<IArticleSanitizedGroup> {
    const xml = fs.readFileSync(
      path.join(__dirname, '../files/obtenerArticulos.min.xml'),
      'utf-8',
    );
    const { data } = await this.axiosInstance.post<string>(
      '/ServicioSTOCArticulo.asmx',
      xml,
    );
    const json = xml2json<ObtenerArticulosDTO>(data);
    return sanitizeArticle(json);
  }

  async requestCustomers(): Promise<ICustomerSanitized[]> {
    const xml = fs.readFileSync(
      path.join(__dirname, '../files/obtenerClientes.min.xml'),
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
