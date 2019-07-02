import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pedidoPreparo',
  templateUrl: './pedidoPreparo.component.html',
  styleUrls: ['./pedidoPreparo.component.scss']
})

export class PedidoPreparoComponent implements OnInit {
  @Input('titulo') titulo: string;
  @Input('descricao') descricao: string;
  @Input('onClick') onSelecionar: (Event) => {};

  constructor() { }

  ngOnInit() { }

  onClick(event) {
    if (this.onSelecionar) {
      this.onSelecionar(event);
    }
  }
}

