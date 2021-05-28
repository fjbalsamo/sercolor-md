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
