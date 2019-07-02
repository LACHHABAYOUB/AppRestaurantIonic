import {Component, Input, OnInit} from '@angular/core';
import {ItemPedido} from '../../model/pedido/item-pedido';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-pedido-pizza',
  templateUrl: './item-pedido-pizza.component.html',
  styleUrls: ['./item-pedido-pizza.component.scss'],
})
export class ItemPedidoPizzaComponent implements OnInit {

  @Input() itemPedido: ItemPedido;
  @Input('placeHolderImagem') placeHolderImagem: string = '';

  faEllipsisH = faEllipsisH;

  constructor() {
  }

  ngOnInit() {
  }

  onError(event) {
    event.target.src = this.placeHolderImagem;
  }

  private obterClassSabores(): string {
    switch (this.itemPedido.produtos.length) {
      case 2:
        return 'dois-sabores';
      case 3:
        return 'tres-sabores';
      case 4:
        return 'quatro-sabores';
    }
  }

}
