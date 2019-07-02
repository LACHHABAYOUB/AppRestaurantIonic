import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PassoProduto} from '../../model/passo/passo-produto';
import {Utils} from '../../helpers/utils';

@Component({
  selector: 'app-passo',
  templateUrl: './passo.component.html',
  styleUrls: ['./passo.component.scss'],
})
export class PassoComponent implements OnInit {

  @Input() passo: PassoProduto;
  @Output() onSelecionarItem = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  selecionarItem(item) {
    this.onSelecionarItem.emit(item);
  }

  obterDescricao(descricao: string, valor: number): string {
    return valor ? descricao + ' + R$ ' + Utils.formatReal(valor) : descricao;
  }
}
