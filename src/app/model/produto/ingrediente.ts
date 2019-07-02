import {Produto} from './produto';

export class Ingrediente {

  id: number;
  produto: Produto;
  produtoIngrediente: Produto;
  preco: number;
  quantidade: number;
  quantidadeMaxima: number;

  constructor(id?: number
    , produto?: Produto
    , produtoIngrediente?: Produto
    , preco?: number
    , quantidade?: number
    , quantidadeMaxima?: number) {
    this.id = id;
    this.produto = produto;
    this.produtoIngrediente = produtoIngrediente;
    this.preco = preco;
    this.quantidade = quantidade;
    this.quantidadeMaxima = quantidadeMaxima;
  }
}
