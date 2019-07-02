import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PedidosListComponent } from './pedidosList.component';
import { IonicModule } from '@ionic/angular';
import { PedidoModule } from '../pedido/pedido.modules';
import {ItemPedidoPizzaModule} from '../item-pedido-pizza/item-pedido-pizza.module';

@NgModule({
  imports: [CommonModule, 
            RouterModule,
            IonicModule,
            PedidoModule,
            ItemPedidoPizzaModule
          ],
  declarations: [PedidosListComponent],
  exports: [PedidosListComponent]
})
export class PedidosListModule { }
