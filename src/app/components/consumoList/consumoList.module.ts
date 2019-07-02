import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConsumoListComponent } from './consumoList.component';
import { IonicModule } from '@ionic/angular';
import { PedidoModule } from '../pedido/pedido.modules';

@NgModule({
  imports: [CommonModule, 
            RouterModule,
            IonicModule,
            PedidoModule
          ],
  declarations: [ConsumoListComponent],
  exports: [ConsumoListComponent]
})
export class ConsumoListModule { }
