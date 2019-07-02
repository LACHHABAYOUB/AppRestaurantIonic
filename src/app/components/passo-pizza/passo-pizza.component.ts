import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PassoProduto} from '../../model/passo/passo-produto';
import {QuantidadeSabor} from '../../model/produto/quantidade-sabor';
import {ItemPasso} from '../../model/passo/item-passo';

@Component({
  selector: 'app-passo-pizza',
  templateUrl: './passo-pizza.component.html',
  styleUrls: ['./passo-pizza.component.scss']
})
export class PassoPizzaComponent implements OnInit {

  @Input() passo: PassoProduto;
  @Input() subDescricao: string;
  @Input() numeroSaborPadraoInicial: number;
  @Output() onSelecionarItem = new EventEmitter();
  sabores: QuantidadeSabor[];

  constructor() {
    if (!this.numeroSaborPadraoInicial) {
      this.numeroSaborPadraoInicial = 1;
    }
  }

  ngOnInit() {
    let itemSelecionado = this.passo.obterItensSelecionados()[0];
    if (itemSelecionado) {
      this.sabores = this.obterQuantidadeSabores(itemSelecionado);
    }
  }

  private obterQuantidadeSabores(itemPasso: ItemPasso): QuantidadeSabor[] {
    const itensPassoRepetidos = new Array(itemPasso.quantidadeMaxima).fill(itemPasso);
    let contemQuantidadeIgualOuMaior = itensPassoRepetidos.length >= this.numeroSaborPadraoInicial;
    return itensPassoRepetidos
      .map((item, i) => new QuantidadeSabor((i + 1) + (i == 0 ? ' Sabor' : ' Sabores'), (i + 1), contemQuantidadeIgualOuMaior ? this.numeroSaborPadraoInicial == (i + 1) : i == 0));
  }

  selecionarItem(item) {
    if (item.item.id !== this.passo.obterItensSelecionados()[0].id) {
      this.sabores = this.obterQuantidadeSabores(item.item);
    }
    this.onSelecionarItem.emit({
      referencia: item.referencia,
      item: item.item,
      quantidadeSelecionado: this.obterSaborSelecionado()[0].quantidade
    });
  }

  selecionarSabor(sabor) {
    this.setarSaborComoSelecionado(sabor);
    this.onSelecionarItem.emit({
      referencia: sabor.referencia,
      item: this.passo.obterItensSelecionados()[0],
      quantidadeSelecionado: sabor.item.quantidade
    });
  }

  private setarSaborComoSelecionado(saborSelecionado) {
    this.sabores.forEach(sabor => sabor.selecionado = sabor.quantidade === saborSelecionado.item.quantidade);
  }

  private obterSaborSelecionado() {
    return this.sabores.filter(quantidadeSabor => quantidadeSabor.selecionado);
  }
}
