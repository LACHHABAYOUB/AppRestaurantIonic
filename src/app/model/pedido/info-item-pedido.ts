import {TipoPasso} from '../passo/tipo-passo.enum';

export class InfoItemPedido {

  descricao: string;
  tipoPasso: TipoPasso;

  constructor(descricao?: string
    , tipoPasso?: TipoPasso) {
    this.descricao = descricao;
    this.tipoPasso = tipoPasso;
  }
}
