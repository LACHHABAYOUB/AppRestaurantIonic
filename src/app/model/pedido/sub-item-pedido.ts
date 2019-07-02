import {TipoPasso} from '../passo/tipo-passo.enum';

export class SubItemPedido {

  fkIdProduto: number;
  quantidade: number;
  valorUnitario: number;
  valorTotal: number;
  tipoPasso: TipoPasso;

  constructor(fkIdProduto?: number
    , quantidade?: number
    , valorUnitario?: number
    , valorTotal?: number
    , tipoPasso?: TipoPasso) {
    this.fkIdProduto = fkIdProduto;
    this.quantidade = quantidade;
    this.valorUnitario = valorUnitario;
    this.valorTotal = valorTotal;
    this.tipoPasso = tipoPasso;
  }
}
