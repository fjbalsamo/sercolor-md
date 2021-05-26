interface InnerCustomerAttr {
  _text?: string;
}

export interface ICliente {
  _attributes: {
    ClienteID: string;
  };
  Nombre: InnerCustomerAttr;
  NombreLegal: InnerCustomerAttr;
  EsClienteGlobal: InnerCustomerAttr;
  Domicilio: InnerCustomerAttr;
  Localidad: InnerCustomerAttr;
  CodigoPostal: InnerCustomerAttr;
  Provincia: InnerCustomerAttr;
  ProvinciaNombre: InnerCustomerAttr;
}

export interface ObtenerClientesDTO {
  'soap:Envelope': {
    'soap:Body': {
      ObtenerClientesResponse: {
        ObtenerClientesResult: {
          Clientes: {
            Cliente: ICliente[];
          };
        };
      };
    };
  };
}
