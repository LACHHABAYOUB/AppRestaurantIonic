import { FormatRealModule } from './../../pipes/formatReal.module';
import { ProgressButtonModule } from './../../directives/progress-button/progress-button.module';
import { PedidosListModule } from './../pedidosList/pedidosList.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FinalizarBotaoModule } from '../finalizarBotao/finalizarBotao.module';
import { RouterModule } from '@angular/router';
import { PainelPedidosComponent } from './painelPedidos.component';
import { ButtonModule } from '../button/button.module';

@NgModule({
  imports: [CommonModule, 
            FontAwesomeModule,
            FinalizarBotaoModule,
            RouterModule,
            PedidosListModule,
            ButtonModule,
            ProgressButtonModule,
            FormatRealModule
          ],
  declarations: [PainelPedidosComponent],
  exports: [PainelPedidosComponent]
})
export class PainelPedidosModule { }
