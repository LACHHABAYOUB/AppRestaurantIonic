import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FinalizarBotaoComponent } from './finalizarBotao.component';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [FinalizarBotaoComponent],
  exports: [FinalizarBotaoComponent]
})
export class FinalizarBotaoModule { }
