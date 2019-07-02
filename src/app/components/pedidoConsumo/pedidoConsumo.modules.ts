import { PedidosListModule } from './../pedidosList/pedidosList.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormatRealModule } from 'src/app/pipes/formatReal.module';
import { PedidoConsumoComponent } from './pedidoConsumo.component';

@NgModule({
    imports: [CommonModule, FontAwesomeModule, FormatRealModule,PedidosListModule],
    declarations: [PedidoConsumoComponent],
    exports: [PedidoConsumoComponent],
    providers: []
})

export class PedidoConsumoModule {}