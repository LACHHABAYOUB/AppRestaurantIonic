import {SubItemPedido} from './sub-item-pedido';
import {InfoItemPedido} from './info-item-pedido';
import {Utils} from '../../helpers/utils';
import {Produto} from '../produto/produto';

export class ItemPedido {

  produtos: Produto[];
  deQuemE: string;
  observacao: string;
  quantidade: number;
  valorUnitario: number;
  valorTotal: number;
  subItensPedido: SubItemPedido[];
  infoItensPedido: InfoItemPedido[];

  constructor(produtos?: Produto[]
    , deQuemE?: string
    , observacao?: string
    , quantidade?: number
    , valorUnitario?: number
    , valorTotal?: number
    , subItemsPedido?: SubItemPedido[]
    , infoItemsPedido?: InfoItemPedido[]) {
    this.produtos = produtos;
    this.deQuemE = deQuemE;
    this.observacao = observacao;
    this.quantidade = quantidade;
    this.valorUnitario = valorUnitario;
    this.valorTotal = valorTotal;
    this.subItensPedido = subItemsPedido;
    this.infoItensPedido = infoItemsPedido;
  }

  obterValorTotalFormatado(): string {
    return Utils.formatReal(this.valorTotal);
  }

  obterValoresCalculadosDosSubItensPedido(): number {
    if (!this.subItensPedido.length) {
      return 0;
    }
    return this.subItensPedido
      .map(subItem => subItem.valorTotal)
      .reduce((valorTotal, valorAtual) => valorTotal + valorAtual);
  }

  calcularValorTotal(): number {
    this.valorTotal = this.valorUnitario * this.quantidade;
    return this.valorTotal;
  }

  calcularValorUnitario(): number {
    this.valorUnitario = (this.obterMaiorValorUnitarioEntreOsProdutos() + this.obterValoresCalculadosDosSubItensPedido());
    return this.valorUnitario;
  }

  private obterMaiorValorUnitarioEntreOsProdutos(): number {
    return Object.assign([], this.produtos).sort((produtoA, produtoB) => produtoB.preco - produtoA.preco)[0].preco;
  }

  contemProduto(produto: Produto): boolean {
    return !!this.produtos.find(p => p.id === produto.id);
  }

  incluirProduto(produto: Produto) {
    if (produto && !this.contemProduto(produto)) {
      produto.selecionado = true;
      this.produtos.push(produto);
    }
  }

  removerProduto(produto: Produto) {
    if (this.contemProduto(produto)) {
      let index = this.produtos.findIndex(p => p.id === produto.id);
      this.produtos.splice(index, 1);
    }
  }

  limparProdutos() {
    this.produtos = [];
  }

  excluirProdutosDoFinalDaFila(quantidade: number) {
    this.produtos.splice(this.produtos.length - quantidade, quantidade);
  }

  isPrimeiroProduto(idProduto: number): boolean {
    return idProduto === this.produtos[0].id;
  }

  obterProduto(idProduto: number): Produto {
    return this.produtos.find(p => p.id === idProduto);
  }

  alterarPrecoProduto(idProduto: number, preco: number) {
    this.obterProduto(idProduto).preco = preco;
  }
}
