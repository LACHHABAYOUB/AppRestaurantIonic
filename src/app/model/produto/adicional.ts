import {Produto} from './produto';

export class Adicional {

  id: number;
  produto: Produto;
  produtoAdicional: Produto;
  preco: number;
  quantidadeMaxima: number;

  constructor(id?: number
    , produto?: Produto
    , produtoAdicional?: Produto
    , preco?: number
    , quantidadeMaxima?: number) {
    this.id = id;
    this.produto = produto;
    this.produtoAdicional = produtoAdicional;
    this.preco = preco;
    this.quantidadeMaxima = quantidadeMaxima;
  }
}
