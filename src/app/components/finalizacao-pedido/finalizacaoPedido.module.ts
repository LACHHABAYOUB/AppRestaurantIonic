import { ButtonModule } from './../button/button.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FinalizacaoPedidoComponent } from './finalizacaoPedido.component';

@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    FontAwesomeModule,
    ButtonModule],
  declarations: [FinalizacaoPedidoComponent],
  exports: [FinalizacaoPedidoComponent]
})
export class FinalizacaoPedidoModule { }
