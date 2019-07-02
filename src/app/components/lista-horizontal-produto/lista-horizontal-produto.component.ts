import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Produto} from '../../model/produto/produto';

@Component({
  selector: 'app-lista-horizontal-produto',
  templateUrl: './lista-horizontal-produto.component.html',
  styleUrls: ['./lista-horizontal-produto.component.scss'],
})
export class ListaHorizontalProdutoComponent implements OnInit {

  @Input() produtos: Produto[];
  @Input() quantidadeMaximaParaSelecionar: number = 1;
  @Output() onSelecionar = new EventEmitter();
  @Output() onExecutarQuandoForUltimoItem = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  selecionar(produto: Produto) {
    this.selecionarItem(produto);
    this.onSelecionar.emit(produto);
    if (this.eUltimoDaListaSelecionado()) {
      this.onExecutarQuandoForUltimoItem.emit(this.obterPrimeiroProdutoDaLista());
    }
  }

  selecionarItem(produto: Produto) {
    let quantidadeSelecionado = this.obterQuantidadeSelecionado();
    let podeSelecionar = quantidadeSelecionado < this.quantidadeMaximaParaSelecionar;

    this.produtos.forEach(produtoHorizontal => {
      if ((podeSelecionar || produto.selecionado) && produtoHorizontal.id === produto.id) {
        produtoHorizontal.selecionado = quantidadeSelecionado === 1 ? true : !produto.selecionado;
      }
    });
  }

  private eUltimoDaListaSelecionado(): boolean {
    return this.obterQuantidadeSelecionado() === 1;
  }

  private obterQuantidadeSelecionado(): number {
    return this.produtos.filter(produto => produto.selecionado).length;
  }

  private obterPrimeiroProdutoDaLista(): Produto {
    return this.produtos.filter(produto => produto.selecionado)[0];
  }

}
