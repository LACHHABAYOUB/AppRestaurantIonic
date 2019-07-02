import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-andamento',
  templateUrl: './andamento.component.html',
  styleUrls: ['./andamento.component.scss'],
})
export class AndamentoComponent implements OnInit {

  @Input('pedidosEmAndamento') pedidosEmAndamento: number = 0;
  @Output('onVerAndamentos') verAndamentos = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onVerAndamentos() {
    this.verAndamentos.emit({});
  }
}
