import { IArticulo, ObtenerArticulosDTO } from '../dto/obtenerArticulos.dto';

type articleGroup = 'INSUMO' | 'COLOR' | 'COLORANTE' | 'OTRO';
type colorGroup = 'NEGRO' | 'BLANCO' | 'COLOR';
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
  color: string;
  estado: articleStatus;
  grupo: colorGroup;
}

const getArticleGroup = (article: IArticulo): articleGroup => {
  const type: string = article.TipoDeArticulo._text || '';
  const name: string = article.Nombre._text || '';
  if (type.toLocaleLowerCase().includes('colorante')) return 'COLORANTE';
  if (name.toLocaleLowerCase().includes('insumo')) return 'INSUMO';
  return 'OTRO';
};

const sanitizeArticle = (
  articles: ObtenerArticulosDTO,
): IArticleSanitized[] => {
  const { Articulo } =
    articles['soap:Envelope']['soap:Body'].ObtenerArticulosResponse
      .ObtenerArticulosResult.Articulos;
  const articlesSanitized: IArticleSanitized[] = Articulo.map((a) => {
    return {
      codigo: a._attributes.ArticuloID,
      grupo: getArticleGroup(a),
      descripcion: (a.Descripcion._text || '')
        .replace('\n', '')
        .replace('\t', ' '),
      ancho: 0,
      rendimiento: 0,
      estado: 'OK',
    };
  });
  return articlesSanitized;
};

const getColorGroup = (article: IArticulo): colorGroup => {
  const str = JSON.stringify(article);
  if (str.toLocaleLowerCase().includes('negro')) return 'NEGRO';
  if (str.toLocaleLowerCase().includes('blanco')) return 'BLANCO';
  return 'COLOR';
};

const sanitizeColor = (articles: ObtenerArticulosDTO): IColorSanitized[] => {
  const { Articulo } =
    articles['soap:Envelope']['soap:Body'].ObtenerArticulosResponse
      .ObtenerArticulosResult.Articulos;
  const colors: IColorSanitized[] = Articulo.map((a) => {
    return {
      codigo: a.Clasificacion2Articulos._text || '',
      color: a.Clasificacion2ArticulosNombre._text || '',
      estado: 'OK',
      grupo: getColorGroup(a),
    };
  });
  const onlyColorWithCode = colors.filter((c) => c.codigo !== '');

  const clearDuplicates: IColorSanitized[] = [];

  onlyColorWithCode.forEach((c) => {
    if (!clearDuplicates.some((e) => e.codigo === c.codigo)) {
      clearDuplicates.push(c);
    }
  });
  return clearDuplicates;
};

export interface IArticleSanitizedGroup {
  colors: IColorSanitized[];
  supplies: IArticleSanitized[];
  colorants: IArticleSanitized[];
  others: IArticleSanitized[];
}

export default (
  obtenerArticulosDto: ObtenerArticulosDTO,
): IArticleSanitizedGroup => {
  const colors = sanitizeColor(obtenerArticulosDto);
  const articles = sanitizeArticle(obtenerArticulosDto);
  const supplies = articles.filter((a) => a.grupo === 'INSUMO');
  const colorants = articles.filter((a) => a.grupo === 'COLORANTE');
  const others = articles.filter((a) => a.grupo === 'OTRO');
  return {
    colors,
    supplies,
    colorants,
    others,
  };
};
