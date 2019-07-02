import { Component, OnInit, Input } from '@angular/core';
import {ItemPedido} from '../../model/pedido/item-pedido';

@Component({
  selector: 'app-pedidosList',
  templateUrl: './pedidosList.component.html',
  styleUrls: ['./pedidosList.component.scss']
})

export class PedidosListComponent implements OnInit {

  @Input('itensPedido') itensPedido: ItemPedido[];

  constructor() { }

  ngOnInit() { }
}
