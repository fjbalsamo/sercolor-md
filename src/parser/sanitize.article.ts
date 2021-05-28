import { IArticulo, ObtenerArticulosDTO } from '../dto/obtenerArticulos.dto';

type articleGroup = 'INSUMO' | 'COLOR' | 'COLORANTE' | 'OTRO';
type articleStatus = 'INCOMPLETO' | 'NUEVO' | 'OK' | 'BLOQUEADO';

export interface IArticleSanitized {
  codigo: string;
  grupo: articleGroup;
  descripcion: string;
  ancho: number;
  rendimiento: number;
  estado: articleStatus;
}

export interface IColorSanitized {
  codigo: string;
}

const getArticleGroup = (article: IArticulo): articleGroup => {
  const type: string = article.TipoDeArticulo._text || '';
  if (type.toLocaleLowerCase().includes('insumo')) return 'INSUMO';
  if (type.toLocaleLowerCase().includes('colorante')) return 'COLORANTE';
  return 'OTRO';
};

export const sanitizeArticle = (
  articles: ObtenerArticulosDTO,
): IArticleSanitized[] => {
  const { Articulo } =
    articles['soap:Envelope']['soap:Body'].ObtenerArticulosResponse
      .ObtenerArticulosResult.Articulos;
  const articlesSanitized: IArticleSanitized[] = Articulo.map((a) => {
    return {
      codigo: a._attributes.ArticuloID,
      grupo: getArticleGroup(a),
      descripcion: a.Descripcion._text || '',
      ancho: 0,
      rendimiento: 0,
      estado: 'OK',
    };
  });
  return articlesSanitized;
};
