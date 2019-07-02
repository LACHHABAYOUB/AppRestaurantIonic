import { Component, OnInit, Input } from '@angular/core';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import {ItemPedido} from '../../model/pedido/item-pedido';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss'],
})
export class PedidoComponent implements OnInit {

  @Input() itemPedido: ItemPedido;
  @Input('placeHolderImagem') placeHolderImagem: string = "";

  faEllipsisH = faEllipsisH;

  constructor() { }

  ngOnInit() { }

  onError(event) {
    event.target.src = this.placeHolderImagem;
  }
}
