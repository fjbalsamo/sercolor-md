import { Injectable, HttpService, HttpStatus } from '@nestjs/common';
import xmlJS from 'xml-js';
import obtenerClientesXML from './api/obtenerClientes.xml';

const platformBaseURL = 'http://localhost:8080';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async ObtenerClientes(): Promise<{ data: any; status: number }> {
    try {
      const observable = await this.httpService.post(
        `${platformBaseURL}/ServicioCCOCliente.asmx`,
        obtenerClientesXML,
        {
          headers: {
            'Content-Type': 'text/xml; charset=utf-8',
          },
        },
      );
      const { data, status } = await observable.toPromise();

      if (status !== HttpStatus.OK) return { data: null, status };
      const json = xmlJS.xml2json(data, {
        compact: true,
        spaces: 4,
        ignoreDeclaration: true,
        ignoreComment: true,
        nativeType: true,
      });
      return { data: JSON.parse(json), status: status };
    } catch (error) {
      console.log(error);
      return { data: null, status: HttpStatus.INTERNAL_SERVER_ERROR };
    }
  }
}
