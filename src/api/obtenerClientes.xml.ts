export default `<?xml version="1.0" encoding="utf-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
   xmlns:wsp="http://wsplataforma.intecsoft.com.ar/">
   <soapenv:Header/>
   <soapenv:Body>
      <wsp:ObtenerClientes>
         <wsp:AtributosVisibles>
            <wsp:ClienteAtributos>ClienteID</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Nombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>NombreLegal</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>EsClienteGlobal</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Domicilio</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Localidad</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>CodigoPostal</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Provincia</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>ProvinciaNombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Pais</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>PaisNombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Telefono</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Fax</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Email</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Observacion</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>CodigoDeProveedorParaElCliente</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Referencia</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>HorarioDeAtencion</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>HorarioDeEntrega</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>CondicionAnteElIVA</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>CondicionAnteElIVANombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>ClaveTributaria</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>IngresosBrutos</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>ContactoDeVenta</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>ContactoDeCobros</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>CondicionPago</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>CondicionPagoNombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>MonedaUsualCuentaCorriente</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>MonedaUsualCuentaCorrienteNombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>CuentaCliente</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>TipoDeCliente</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>TipoDeClienteNombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>ActividadDeCliente</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>ActividadDeClienteNombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Clasificacion1</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Clasificacion1Nombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Clasificacion2</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Clasificacion2Nombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Clasificacion3</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Clasificacion3Nombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Clasificacion4</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Clasificacion4Nombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Clasificacion5</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Clasificacion5Nombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Clasificacion6</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Clasificacion6Nombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Clasificacion7</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Clasificacion7Nombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Clasificacion8</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Clasificacion8Nombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Clasificacion9</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Clasificacion9Nombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Vendedor</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>VendedorNombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>ZonaDeVenta</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>ZonaDeVentaNombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Cobrador</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>CobradorNombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Transporte</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>TransporteNombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>BloqueadoParaNotasDePedido</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>BloqueadoParaFacturar</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>FechaDeAlta</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>FechaDeBaja</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>HabilitadoParaConsultasWeb</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>FormatoDeImpresionPorCliente</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>FormatoDeImpresionPorClienteNombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Vendedor2</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Vendedor2Nombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>AtributoString1</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>AtributoString2</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>AtributoString3</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>AtributoString4</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>AtributoFecha1</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>AtributoFecha2</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>AtributoFecha3</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>AtributoFecha4</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Clasificacion1PedidosYComprobantesVarios</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Clasificacion1PedidosYComprobantesVariosNombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Clasificacion2PedidosYComprobantesVarios</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Clasificacion2PedidosYComprobantesVariosNombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Clasificacion3PedidosYComprobantesVarios</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Clasificacion3PedidosYComprobantesVariosNombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Clasificacion4PedidosYComprobantesVarios</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Clasificacion4PedidosYComprobantesVariosNombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Clasificacion5PedidosYComprobantesVarios</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Clasificacion5PedidosYComprobantesVariosNombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Clasificacion6PedidosYComprobantesVarios</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Clasificacion6PedidosYComprobantesVariosNombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>HabilitadoParaConciliacionConEmpresaCliente</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>CodigoDeClienteExterno</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>FechaDeProximaGestionDeCobranza</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>ProximaGestionDeCobranza</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>FormaDeGenerarComprobantesEnElSistemaDeContratos</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>NodoOrigen</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>NodoOrigenNombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Municipio</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>MunicipioNombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>SeConsideraParaTasaDeAbasto</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>ControlaElCobroCorrelativoPorVencimiento</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>VehiculoPorDefecto</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>VehiculoPorDefectoNombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Distribuidor</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>DistribuidorNombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>ZonaDeDistribucion</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>ZonaDeDistribucionNombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Calle</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>NumeroCalle</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Piso</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Departamento</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Barrio</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>DiasDeGraciaParaElCalculoDeDiasDeAtrasoDeRecibos</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>SitioWeb</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>DescripcionDeLaActividad</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>FacturacionAnualEnMonedaLocal</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>CantidadDeEmpleados</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>EnvioComprobantesPorMailDireccionDeMail</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>EnvioComprobantesPorMailAsuntoDelMail</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>EnvioComprobantesPorMailCuerpoDelMail</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>ObservacionDeProximaGestionDeCobranza</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>CodigoDeCalle</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>CodigoDeCalleNombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>EnvioRecibosDeClientesPorMailDireccionDeMail</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>EnvioRecibosDeClientesPorMailAsuntosDelMail</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>EnvioRecibosDeClientesPorMailCuerpoDelMail</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>TasaMensualParaCalculoDeInteres</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>EmailBackup</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Domicilios</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>PersonaFisica</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>PersFisFechaDeNacimiento</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>PersFisPaisDeNacimiento</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>PersFisPaisDeNacimientoNombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>PersFisNacionalidad</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>PersFisNacionalidadNombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>PersFisSexo</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>PersFisProfesion</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>PersFisProfesionNombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>PersFisTarjetaDeCredito</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>PersFisTarjetaDeCreditoNombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>PersFisFechaDeVencimientoDeTarjetaDeCredito</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>PersFisTipoDeDocumento</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>PersFisTipoDeDocumentoNombre</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>PersFisNumeroDeDocumento</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>PersFisNumeroDeTarjetaDeCredito</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>Grupos</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>FechaUltActualizacion</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>UltimoAuditorCliente</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>DatosDeVentas</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>BloqueadoReservas</wsp:ClienteAtributos>
            <wsp:ClienteAtributos>BloqueadoContratos</wsp:ClienteAtributos>
         </wsp:AtributosVisibles>
         <wsp:Filtros></wsp:Filtros>
      </wsp:ObtenerClientes>
   </soapenv:Body>
</soapenv:Envelope>`;
