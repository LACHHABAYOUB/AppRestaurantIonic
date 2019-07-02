import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PedidosListConsumoComponent } from './pedidosListConsumo.component';
import { PedidoConsumoModule } from '../pedidoConsumo/pedidoConsumo.modules';
import { FormatRealModule } from 'src/app/pipes/formatReal.module';

@NgModule({
  imports: [CommonModule, 
            RouterModule,
            IonicModule,
            PedidoConsumoModule,
            FormatRealModule
          ],
  declarations: [PedidosListConsumoComponent],
  exports: [PedidosListConsumoComponent]
})
export class PedidosListConsumoModule { }
