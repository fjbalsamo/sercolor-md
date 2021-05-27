import { ObtenerClientesDTO } from '../dto/obtenerClientes.dto';

export interface ICustomerSanitized {
  codigo: string;
  nombre: string;
  mail: string;
  direccion: string;
  //direcciones_retiro_mercaderia: string[],
  telefono: string;
  //categoria: 'enum', default(C) NO
  cliente: string;
  localidad: string;
  //cuits: [], other table [{cuitId:string}]
  //cupo: {},  other table NO
  //Pedido: [],  other table NO
  //Partida: [],  other table NO
  //Muestra: [],  other table NO
  //PedidoColor: [],  other table NO
  //HojaDeRuta: [],  other table NO
  //cupoClienteId: 'string' ?? NO
}

export default (customers: ObtenerClientesDTO): ICustomerSanitized[] => {
  const { Cliente } =
    customers['soap:Envelope']['soap:Body'].ObtenerClientesResponse
      .ObtenerClientesResult.Clientes;
  const sanitize: ICustomerSanitized[] = Cliente.map((cli) => {
    console.log(`\n`, cli, '\n');
    return {
      codigo: cli._attributes.ClienteID,
      nombre: cli.Nombre._text || '',
      mail: cli.Email._text || '',
      direccion: cli.Domicilio._text || '',
      //direcciones_retiro_mercaderia: [],
      telefono: cli.Telefono._text || '',
      //categoria: 'enum', default(C)
      cliente: cli.NombreLegal._text || '',
      localidad: cli.Localidad._text || '',
      //cuits: [], other table
      //cupo: {},  other table
      //Pedido: [],  other table
      //Partida: [],  other table
      //Muestra: [],  other table
      //PedidoColor: [],  other table
      //HojaDeRuta: [],  other table
      //cupoClienteId: 'string' ??
    };
  });
  return sanitize;
};
