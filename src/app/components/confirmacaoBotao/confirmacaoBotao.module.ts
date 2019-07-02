import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConfirmacaoBotaoComponent } from './confirmacaoBotao.component';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [ConfirmacaoBotaoComponent],
  exports: [ConfirmacaoBotaoComponent]
})
export class ConfirmacaoBotaoModule { }
