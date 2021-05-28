interface InnerArticleAttr {
  _text?: string;
}

export interface IArticulo {
  _attributes: {
    ArticuloID: string;
  };
  ArticuloID: InnerArticleAttr;
  Nombre: InnerArticleAttr;
  ArticuloEmpresa: InnerArticleAttr;
  ArticuloParaImpresion: InnerArticleAttr;
  TipoDeArticulo: InnerArticleAttr;
  Descripcion: InnerArticleAttr;
  Clasificacion1ArticulosNombre: InnerArticleAttr;
  Clasificacion1Articulos: InnerArticleAttr;
  Clasificacion2ArticulosNombre: InnerArticleAttr;
  Clasificacion2Articulos: InnerArticleAttr;
  Clasificacion3ArticulosNombre: InnerArticleAttr;
  Clasificacion3Articulos: InnerArticleAttr;
  Clasificacion4ArticulosNombre: InnerArticleAttr;
  Clasificacion4Articulos: InnerArticleAttr;
  Clasificacion5ArticulosNombre: InnerArticleAttr;
  Clasificacion5Articulos: InnerArticleAttr;
  Clasificacion6ArticulosNombre: InnerArticleAttr;
  Clasificacion6Articulos: InnerArticleAttr;
}

export interface ObtenerArticulosDTO {
  'soap:Envelope': {
    'soap:Body': {
      ObtenerArticulosResponse: {
        Articulos: {
          Articulo: IArticulo[];
        };
      };
    };
  };
}
