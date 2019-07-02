import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PassoPizzaComponent} from './passo-pizza.component';
import {EscolhaBotaoModule} from '../escolhaBotao/escolhaBotao.module';
import {ColorButtonModule} from '../../directives/color-button/color-button.module';

@NgModule({
  declarations: [PassoPizzaComponent],
  imports: [
    CommonModule,
    EscolhaBotaoModule,
    ColorButtonModule
  ],
  exports: [PassoPizzaComponent]
})
export class PassoPizzaModule {
}
