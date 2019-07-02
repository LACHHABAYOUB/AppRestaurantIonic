import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finalizacao-pedido',
  templateUrl: './finalizacaoPedido.component.html',
  styleUrls: ['./finalizacaoPedido.component.scss'],
})
export class FinalizacaoPedidoComponent implements OnInit {
  faCheckCircle = faCheckCircle;
  @Input('open') open: boolean = false;
  @Output('onFazerOutroPedido') fazerOutroPedido = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() { }

  onFazerOutroPedido = (event) => {
    this.fazerOutroPedido.emit({})
  }
}
