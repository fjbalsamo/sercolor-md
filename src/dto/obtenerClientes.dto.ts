interface InnerCustomerAttr {
  _text?: string;
}

export interface AddressCustomerAttr {
  _attributes: {
    DomicilioID: string;
  };
  ClienteID: InnerCustomerAttr;
  Renglon: InnerCustomerAttr;
  Domicilio: InnerCustomerAttr;
  Localidad: InnerCustomerAttr;
  CodigoPostal: InnerCustomerAttr;
  Provincia: InnerCustomerAttr;
  ProvinciaNombre: InnerCustomerAttr;
  Pais: InnerCustomerAttr;
  PaisNombre: InnerCustomerAttr;
  Telefono: InnerCustomerAttr;
  Fax: InnerCustomerAttr;
  Email: InnerCustomerAttr;
  Observacion: InnerCustomerAttr;
  HorarioDeAtencion: InnerCustomerAttr;
  HorarioDeEntrega: InnerCustomerAttr;
  Transporte: InnerCustomerAttr;
  TransporteNombre: InnerCustomerAttr;
  Utilizable: InnerCustomerAttr;
  Municipio: InnerCustomerAttr;
  MunicipioNombre: InnerCustomerAttr;
  EsDireccionPrincipal: InnerCustomerAttr;
  VehiculoPorDefecto: InnerCustomerAttr;
  VehiculoPorDefectoNombre: InnerCustomerAttr;
  Distribuidor: InnerCustomerAttr;
  DistribuidorNombre: InnerCustomerAttr;
  ZonaDeDistribucion: InnerCustomerAttr;
  ZonaDeDistribucionNombre: InnerCustomerAttr;
  Calle: InnerCustomerAttr;
  NumeroCalle: InnerCustomerAttr;
  Piso: InnerCustomerAttr;
  Departamento: InnerCustomerAttr;
  Barrio: InnerCustomerAttr;
  CodigoDeLocalidad: InnerCustomerAttr;
  CodigoDeLocalidadNombre: InnerCustomerAttr;
  Partido: InnerCustomerAttr;
  PartidoNombre: InnerCustomerAttr;
  CodigoDeCalle: InnerCustomerAttr;
  CodigoDeCalleNombre: InnerCustomerAttr;
  UtilizaDomicilioDelDistribuidorParaGeneracionDelCOT: InnerCustomerAttr;
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
  Pais: InnerCustomerAttr;
  PaisNombre: InnerCustomerAttr;
  Telefono: InnerCustomerAttr;
  Fax: InnerCustomerAttr;
  Email: InnerCustomerAttr;
  Observacion: InnerCustomerAttr;
  CodigoDeProveedorParaElCliente: InnerCustomerAttr;
  Referencia: InnerCustomerAttr;
  HorarioDeAtencion: InnerCustomerAttr;
  HorarioDeEntrega: InnerCustomerAttr;
  CondicionAnteElIVA: InnerCustomerAttr;
  CondicionAnteElIVANombre: InnerCustomerAttr;
  ClaveTributaria: InnerCustomerAttr;
  IngresosBrutos: InnerCustomerAttr;
  ContactoDeVenta: InnerCustomerAttr;
  ContactoDeCobros: InnerCustomerAttr;
  CondicionPago: InnerCustomerAttr;
  CondicionPagoNombre: InnerCustomerAttr;
  MonedaUsualCuentaCorriente: InnerCustomerAttr;
  MonedaUsualCuentaCorrienteNombre: InnerCustomerAttr;
  CuentaCliente: InnerCustomerAttr;
  TipoDeCliente: InnerCustomerAttr;
  TipoDeClienteNombre: InnerCustomerAttr;
  ActividadDeCliente: InnerCustomerAttr;
  ActividadDeClienteNombre: InnerCustomerAttr;
  Clasificacion1: InnerCustomerAttr;
  Clasificacion1Nombre: InnerCustomerAttr;
  Clasificacion2: InnerCustomerAttr;
  Clasificacion2Nombre: InnerCustomerAttr;
  Clasificacion3: InnerCustomerAttr;
  Clasificacion3Nombre: InnerCustomerAttr;
  Clasificacion4: InnerCustomerAttr;
  Clasificacion4Nombre: InnerCustomerAttr;
  Clasificacion5: InnerCustomerAttr;
  Clasificacion5Nombre: InnerCustomerAttr;
  Clasificacion6: InnerCustomerAttr;
  Clasificacion6Nombre: InnerCustomerAttr;
  Clasificacion7: InnerCustomerAttr;
  Clasificacion7Nombre: InnerCustomerAttr;
  Clasificacion8: InnerCustomerAttr;
  Clasificacion8Nombre: InnerCustomerAttr;
  Clasificacion9: InnerCustomerAttr;
  Clasificacion9Nombre: InnerCustomerAttr;
  Vendedor: InnerCustomerAttr;
  VendedorNombre: InnerCustomerAttr;
  ZonaDeVenta: InnerCustomerAttr;
  ZonaDeVentaNombre: InnerCustomerAttr;
  Cobrador: InnerCustomerAttr;
  CobradorNombre: InnerCustomerAttr;
  Transporte: InnerCustomerAttr;
  TransporteNombre: InnerCustomerAttr;
  BloqueadoParaNotasDePedido: InnerCustomerAttr;
  BloqueadoParaFacturar: InnerCustomerAttr;
  FechaDeAlta: InnerCustomerAttr;
  FechaDeBaja: InnerCustomerAttr;
  HabilitadoParaConsultasWeb: InnerCustomerAttr;
  FormatoDeImpresionPorCliente: InnerCustomerAttr;
  FormatoDeImpresionPorClienteNombre: InnerCustomerAttr;
  Vendedor2: InnerCustomerAttr;
  Vendedor2Nombre: InnerCustomerAttr;
  AtributoString1: InnerCustomerAttr;
  AtributoString2: InnerCustomerAttr;
  AtributoString3: InnerCustomerAttr;
  AtributoString4: InnerCustomerAttr;
  AtributoFecha1: InnerCustomerAttr;
  AtributoFecha2: InnerCustomerAttr;
  AtributoFecha3: InnerCustomerAttr;
  AtributoFecha4: InnerCustomerAttr;
  Clasificacion1PedidosYComprobantesVarios: InnerCustomerAttr;
  Clasificacion1PedidosYComprobantesVariosNombre: InnerCustomerAttr;
  Clasificacion2PedidosYComprobantesVarios: InnerCustomerAttr;
  Clasificacion2PedidosYComprobantesVariosNombre: InnerCustomerAttr;
  Clasificacion3PedidosYComprobantesVarios: InnerCustomerAttr;
  Clasificacion3PedidosYComprobantesVariosNombre: InnerCustomerAttr;
  Clasificacion4PedidosYComprobantesVarios: InnerCustomerAttr;
  Clasificacion4PedidosYComprobantesVariosNombre: InnerCustomerAttr;
  Clasificacion5PedidosYComprobantesVarios: InnerCustomerAttr;
  Clasificacion5PedidosYComprobantesVariosNombre: InnerCustomerAttr;
  Clasificacion6PedidosYComprobantesVarios: InnerCustomerAttr;
  Clasificacion6PedidosYComprobantesVariosNombre: InnerCustomerAttr;
  HabilitadoParaConciliacionConEmpresaCliente: InnerCustomerAttr;
  CodigoDeClienteExterno: InnerCustomerAttr;
  FechaDeProximaGestionDeCobranza: InnerCustomerAttr;
  ProximaGestionDeCobranza: InnerCustomerAttr;
  FormaDeGenerarComprobantesEnElSistemaDeContratos: InnerCustomerAttr;
  NodoOrigen: InnerCustomerAttr;
  NodoOrigenNombre: InnerCustomerAttr;
  Municipio: InnerCustomerAttr;
  MunicipioNombre: InnerCustomerAttr;
  SeConsideraParaTasaDeAbasto: InnerCustomerAttr;
  ControlaElCobroCorrelativoPorVencimiento: InnerCustomerAttr;
  VehiculoPorDefecto: InnerCustomerAttr;
  VehiculoPorDefectoNombre: InnerCustomerAttr;
  Distribuidor: InnerCustomerAttr;
  DistribuidorNombre: InnerCustomerAttr;
  ZonaDeDistribucion: InnerCustomerAttr;
  ZonaDeDistribucionNombre: InnerCustomerAttr;
  Calle: InnerCustomerAttr;
  NumeroCalle: InnerCustomerAttr;
  Piso: InnerCustomerAttr;
  Departamento: InnerCustomerAttr;
  Barrio: InnerCustomerAttr;
  DiasDeGraciaParaElCalculoDeDiasDeAtrasoDeRecibos: InnerCustomerAttr;
  SitioWeb: InnerCustomerAttr;
  DescripcionDeLaActividad: InnerCustomerAttr;
  FacturacionAnualEnMonedaLocal: InnerCustomerAttr;
  CantidadDeEmpleados: InnerCustomerAttr;
  EnvioComprobantesPorMailDireccionDeMail: InnerCustomerAttr;
  EnvioComprobantesPorMailAsuntoDelMail: InnerCustomerAttr;
  EnvioComprobantesPorMailCuerpoDelMail: InnerCustomerAttr;
  ObservacionDeProximaGestionDeCobranza: InnerCustomerAttr;
  CodigoDeCalle: InnerCustomerAttr;
  CodigoDeCalleNombre: InnerCustomerAttr;
  EnvioRecibosDeClientesPorMailDireccionDeMail: InnerCustomerAttr;
  EnvioRecibosDeClientesPorMailAsuntosDelMail: InnerCustomerAttr;
  EnvioRecibosDeClientesPorMailCuerpoDelMail: InnerCustomerAttr;
  Domicilios: {
    Domicilio: AddressCustomerAttr[];
  };
  FechaUltActualizacion: InnerCustomerAttr;
  BloqueadoReservas: InnerCustomerAttr;
  BloqueadoContratos: InnerCustomerAttr;
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
