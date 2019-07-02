import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProdutosFundoCarregandoComponent } from './produtosFundoCarregando.component';
import { CartaoCarregandoComponentModule } from '../cartaoCarregando/cartaoCarregando.module';

@NgModule({
    imports: [CommonModule, CartaoCarregandoComponentModule],
    declarations: [ProdutosFundoCarregandoComponent],
    exports: [ProdutosFundoCarregandoComponent],
    providers: []
})

export class ProdutosFundoCarregandoFundoModule {
}