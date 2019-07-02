import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-finalizarBotao',
  templateUrl: './finalizarBotao.component.html',
  styleUrls: ['./finalizarBotao.component.scss']
})

export class FinalizarBotaoComponent implements OnInit {
  @Input('textoIzquerdo') textoIzquerdo: string;
  @Input('textoDereito') textoDereito: string;
  @Input('onClick') onSelecionar: (Event) => {};

  @Input() ngStyle: { [klass: string]: any; };

  constructor() {
  }
  ngOnInit() { }

  onClick(event) {
    if (this.onSelecionar) {
      this.onSelecionar(event);
    }
  }
}