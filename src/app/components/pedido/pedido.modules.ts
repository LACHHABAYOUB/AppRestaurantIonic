import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { PedidoComponent } from './pedido.component';
import { NgModule } from '@angular/core';
import { FormatRealModule } from 'src/app/pipes/formatReal.module';

@NgModule({
    imports: [CommonModule, FontAwesomeModule, FormatRealModule],
    declarations: [PedidoComponent],
    exports: [PedidoComponent],
    providers: []
})

export class PedidoModule {}