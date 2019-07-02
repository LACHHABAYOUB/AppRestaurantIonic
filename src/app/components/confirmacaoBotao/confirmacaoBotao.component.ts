import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-confirmacao-botao',
  templateUrl: './confirmacaoBotao.component.html',
  styleUrls: ['./confirmacaoBotao.component.scss'],

})
export class ConfirmacaoBotaoComponent implements OnInit {

  @Input() descricao: string;
  @Output() onConfirmar = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  confirmar() {
    this.onConfirmar.emit();
  }
}

