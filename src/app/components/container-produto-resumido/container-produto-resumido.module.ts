import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContainerProdutoResumidoComponent} from './container-produto-resumido.component';
import {FormatRealModule} from '../../pipes/formatReal.module';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ContainerProdutoResumidoComponent],
  imports: [
    CommonModule,
    FormatRealModule,
    AngularFontAwesomeModule,
    FontAwesomeModule
  ],
  exports: [ContainerProdutoResumidoComponent]
})
export class ContainerProdutoResumidoModule {
}
