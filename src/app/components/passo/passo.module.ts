import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PassoComponent} from './passo.component';
import {EscolhaBotaoModule} from '../escolhaBotao/escolhaBotao.module';
import {ColorButtonModule} from '../../directives/color-button/color-button.module';

@NgModule({
  declarations: [PassoComponent],
  imports: [
    CommonModule,
    EscolhaBotaoModule,
    ColorButtonModule
  ],
  exports: [PassoComponent]
})
export class PassoModule {
}
