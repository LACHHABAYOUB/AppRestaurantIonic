import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QuantidadeBotaoComponent } from './quantidadeBotao.component';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [QuantidadeBotaoComponent],
  exports: [QuantidadeBotaoComponent]
})
export class QuantidadeBotaoModule { }
