import { CartaoComponentModule } from './../cartao/cartao.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProdutosListComponent } from './produtosList.component';

@NgModule({
    imports: [CommonModule, CartaoComponentModule],
    declarations: [ProdutosListComponent],
    exports: [ProdutosListComponent],
    providers: []
})

export class ProdutosListModule {
}