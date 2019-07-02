import {Component, Input, OnInit} from '@angular/core';
import {ItemPedido} from '../../model/pedido/item-pedido';

@Component({
  selector: 'app-pedido-consumo',
  templateUrl: './pedidoConsumo.component.html',
  styleUrls: ['./pedidoConsumo.component.scss'],
})
export class PedidoConsumoComponent implements OnInit {

  @Input() itemPedido: ItemPedido;

  constructor() {
  }

  ngOnInit() {
  }

}
