import {TipoPasso} from './tipo-passo.enum';
import {TipoCampo} from './tipo-campo.enum';
import {ItemPasso} from './item-passo';

export class PassoProduto {

  id: number;
  descricao: string;
  ordem: number;
  tipoPasso: TipoPasso;
  tipoCampo: TipoCampo;
  itens: ItemPasso[];

  constructor(id?: number
    , descricao?: string
    , ordem?: number
    , tipoPasso?: TipoPasso
    , tipoCampo?: TipoCampo
    , itens?: ItemPasso[]) {
    this.id = id;
    this.descricao = descricao;
    this.ordem = ordem;
    this.tipoPasso = tipoPasso;
    this.tipoCampo = tipoCampo;
    this.itens = itens;
  }

  obterItensSelecionados(): ItemPasso[] {
    return this.itens.filter(item => item.selecionado).map(item => Object.assign(new ItemPasso(), item));
  }

}
