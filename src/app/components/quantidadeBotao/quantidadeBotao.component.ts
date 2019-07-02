import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quantidade-botao',
  templateUrl: './quantidadeBotao.component.html',
  styleUrls: ['./quantidadeBotao.component.scss'],
})

export class QuantidadeBotaoComponent implements OnInit {

  @Output() onChange = new EventEmitter();
  quantidade: number;

  constructor() {
    this.quantidade = 1;
  }

  ngOnInit() {
  }

  aumentar() {
    this.quantidade++;
    this.onChange.emit({ value: this.quantidade });
  }

  diminuir() {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
    this.onChange.emit({ value: this.quantidade });
  }
}

