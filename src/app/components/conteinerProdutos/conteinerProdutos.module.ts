import { ProdutosFundoCarregandoFundoModule } from 'src/app/components/produtosFundoCarregando/produtosFundoCarregando.modules';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConteinerProdutosComponent } from './conteinerProdutos.component';
import { ConteinerProdutosRoutingModule } from './conteinerProdutos-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProdutosFundoModule } from '../produtosFundo/produtosFundo.modules';

@NgModule({
  imports: [CommonModule, ConteinerProdutosRoutingModule, ProdutosFundoModule, ProdutosFundoCarregandoFundoModule, FontAwesomeModule],
  declarations: [ConteinerProdutosComponent],
  exports: [ConteinerProdutosComponent],
  providers: [],
})

export class ConteinerProdutosComponentModule { }
