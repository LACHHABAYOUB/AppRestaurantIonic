export class ItemPasso {

  id: number;
  descricao: string;
  preco: number;
  quantidade: number;
  quantidadeMaxima: number;
  idProduto: number;
  selecionado: boolean;

  constructor(id?: number
    , descricao?: string
    , preco?: number
    , quantidade?: number
    , quantidadeMaxima?: number
    , idProduto?: number
    , selecionado?: boolean) {
    this.id = id;
    this.descricao = descricao;
    this.preco = preco;
    this.quantidade = quantidade;
    this.quantidadeMaxima = quantidadeMaxima;
    this.idProduto = idProduto;
    this.selecionado = selecionado;
  }

  obterValorTotal(): number {
    return this.preco * this.quantidade;
  }

}
