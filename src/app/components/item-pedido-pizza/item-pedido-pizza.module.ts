import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemPedidoPizzaComponent} from './item-pedido-pizza.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormatRealModule} from '../../pipes/formatReal.module';

@NgModule({
  declarations: [ItemPedidoPizzaComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormatRealModule
  ],
  exports: [ItemPedidoPizzaComponent]
})
export class ItemPedidoPizzaModule {
}
