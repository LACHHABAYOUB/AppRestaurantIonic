import { ProdutosListModule } from './../produtosList/produtosList.modules';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProdutosFundoComponent } from './produtosFundo.component';
import { ProdutosFundoRoutingModule } from './produtosFundo-routing.module';
import { EscolhaBotaoModule } from '../escolhaBotao/escolhaBotao.module';

@NgModule({
    imports: [
        CommonModule,
        ProdutosFundoRoutingModule,
        ProdutosListModule,
        EscolhaBotaoModule
    ],
    declarations: [ProdutosFundoComponent],
    exports: [ProdutosFundoComponent],
    providers: []
})

export class ProdutosFundoModule {
}