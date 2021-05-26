export default `<?xml version="1.0" encoding="utf-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
   xmlns:wsp="http://wsplataforma.intecsoft.com.ar/">
   <soapenv:Header/>
   <soapenv:Body>
      <wsp:ObtenerClientes>
         <wsp:AtributosVisibles>
            <wsp:ClienteAtributos>ClienteID</wsp:ClienteAtributos>
         </wsp:AtributosVisibles>
         <wsp:Filtros></wsp:Filtros>
      </wsp:ObtenerClientes>
   </soapenv:Body>
</soapenv:Envelope>`;
