import { ObtenerClientesDTO } from '../dto/obtenerClientes.dto';

interface ICuitCustomer {
  cuitId: string;
}

interface IAddressCustomer {
  domicilioID: string;
  domicilio: string;
  localidad: string;
  codigoPostal: string;
  provincia: string;
  pais: string;
}

export interface ICustomerSanitized {
  codigo: string;
  nombre: string;
  mail: string;
  direccion: string;
  direcciones_retiro_mercaderia: IAddressCustomer[];
  telefono: string;
  cliente: string;
  localidad: string;
  cuits: ICuitCustomer[];
}

export default (customers: ObtenerClientesDTO): ICustomerSanitized[] => {
  const { Cliente } =
    customers['soap:Envelope']['soap:Body'].ObtenerClientesResponse
      .ObtenerClientesResult.Clientes;
  const sanitize: ICustomerSanitized[] = Cliente.map((cli) => {
    return {
      codigo: cli._attributes.ClienteID,
      nombre: cli.Nombre._text || '',
      mail: cli.Email._text || '',
      direccion: cli.Domicilio._text || '',
      direcciones_retiro_mercaderia: [
        {
          domicilioID: '',
          domicilio: cli.Domicilio._text || '',
          localidad: cli.Localidad._text || '',
          codigoPostal: cli.CodigoPostal._text || '',
          provincia: cli.ProvinciaNombre._text || '',
          pais: cli.PaisNombre._text || '',
        },
      ],
      telefono: cli.Telefono._text || '',
      cliente: cli.NombreLegal._text || '',
      localidad: cli.Localidad._text || '',
      cuits: [{ cuitId: cli.ClaveTributaria._text || '' }],
    };
  });
  return sanitize;
};
