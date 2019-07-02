import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListaHorizontalProdutoComponent} from './lista-horizontal-produto.component';
import {ContainerProdutoResumidoModule} from '../container-produto-resumido/container-produto-resumido.module';
import {ColorButtonModule} from '../../directives/color-button/color-button.module';

@NgModule({
  declarations: [ListaHorizontalProdutoComponent],
  imports: [
    CommonModule,
    ContainerProdutoResumidoModule,
    ColorButtonModule
  ],
  exports: [ListaHorizontalProdutoComponent]
})
export class ListaHorizontalProdutoModule { }
