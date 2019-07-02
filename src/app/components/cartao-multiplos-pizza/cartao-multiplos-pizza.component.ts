import {Component, Input, OnInit} from '@angular/core';
import {Produto} from '../../model/produto/produto';

@Component({
  selector: 'app-cartao-multiplos-pizza',
  templateUrl: './cartao-multiplos-pizza.component.html',
  styleUrls: ['./cartao-multiplos-pizza.component.scss'],
})
export class CartaoMultiplosPizzaComponent implements OnInit {

  @Input() produtos: Produto[];
  @Input() placeHolderImagem: string = '';

  constructor() {
  }

  ngOnInit() {
  }

  onError(event) {
    event.target.src = this.placeHolderImagem;
  }

  private obterClassSabores(): string {
    switch (this.produtos.length) {
      case 2:
        return 'dois-sabores';
      case 3:
        return 'tres-sabores';
      case 4:
        return 'quatro-sabores';
    }
  }

}
