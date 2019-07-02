import { FormatRealModule } from '../../pipes/formatReal.module';
import { ProgressButtonModule } from '../../directives/progress-button/progress-button.module';
import { PedidosListModule } from '../pedidosList/pedidosList.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FinalizarBotaoModule } from '../finalizarBotao/finalizarBotao.module';
import { RouterModule } from '@angular/router';
import { visualizacaoExtratoComponent } from './visualizacaoExtrato.component';
import { ButtonModule } from '../button/button.module';
import { comprandoBotaoModule } from '../comprandoBotao/comprandoBotao.module';
import { PedidoConsumoModule } from '../pedidoConsumo/pedidoConsumo.modules';
import { PedidosListConsumoModule } from '../pedidosListConsumo/pedidosListConsumo.module';

@NgModule({
  imports: [CommonModule, 
            FontAwesomeModule,
            FinalizarBotaoModule,
            RouterModule,
            PedidosListModule,
            ButtonModule,
            ProgressButtonModule,
            FormatRealModule,
            comprandoBotaoModule,
            PedidoConsumoModule,
            PedidosListConsumoModule,
            PedidoConsumoModule,
            
          ],
  declarations: [visualizacaoExtratoComponent],
  exports: [visualizacaoExtratoComponent]
})
export class visualizacaoExtratoModule { }
