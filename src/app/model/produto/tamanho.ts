import {Produto} from './produto';
import {TipoTamanho} from './tipo-tamanho.enum';

export class Tamanho {

  id: number;
  produto: Produto;
  tipoTamanho: TipoTamanho;
  quantidadeSabores: number;
  preco: number;

  constructor(id?: number
    , produto?: Produto
    , tipoTamanho?: TipoTamanho
    , quantidadeSabores?: number
    , preco?: number) {
    this.id = id;
    this.produto = produto;
    this.tipoTamanho = tipoTamanho;
    this.quantidadeSabores = quantidadeSabores;
    this.preco = preco;
  }
}
