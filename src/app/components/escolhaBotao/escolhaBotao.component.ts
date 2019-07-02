import {Component, EventEmitter, Input, Output} from '@angular/core';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-escolhaBotao',
  templateUrl: './escolhaBotao.component.html',
  styleUrls: ['./escolhaBotao.component.scss']
})
export class EscolhaBotaoComponent {
  faCheckCircle = faCheckCircle;

  @Input() descricao: string;
  @Input() referencia: any;
  @Input() item: any;
  @Output() onSelecionar = new EventEmitter();
  @Input() className: string;

  constructor() {
  }

  selecionar() {
    this.onSelecionar.emit({'referencia': this.referencia, 'item': this.item});
  }
}

