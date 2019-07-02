import {Produto} from './produto';

export class ConfigPizza {
  quantidadeSaborSelecionado: number;
  produtosHorizontal: Produto[];
  tipoTamanho: string;

  constructor(quantidadeMaximaSabor?: number
    , produtosHorizontal?: Produto[]
    , tipoTamanho?: string) {
    this.quantidadeSaborSelecionado = quantidadeMaximaSabor ? quantidadeMaximaSabor : 1;
    this.produtosHorizontal = produtosHorizontal;
    this.tipoTamanho = tipoTamanho;
  }

  produtosHorizontalNaoEstaVazio(): boolean {
    return this.produtosHorizontal.length > 0;
  }

  contemProduto(produto: Produto): boolean {
    return !!this.produtosHorizontal.find(p => p.id === produto.id);
  }

  obterIndexDoProdutoHorizontal(produto: Produto): number {
    return this.produtosHorizontal.findIndex(p => p.id === produto.id);
  }

  obterProduto(produto: Produto): Produto {
    return this.produtosHorizontal.find(p => p.id === produto.id);
  }

}
