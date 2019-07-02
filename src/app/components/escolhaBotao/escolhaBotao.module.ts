import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscolhaBotaoComponent } from './escolhaBotao.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, AngularFontAwesomeModule, FontAwesomeModule],
  declarations: [EscolhaBotaoComponent],
  exports: [EscolhaBotaoComponent]
})
export class EscolhaBotaoModule { }
