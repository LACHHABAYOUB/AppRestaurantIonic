import {InputtextModule} from './../inputtext/inputtext.module';
import {CartaoXlCarregandocomponentModule} from './../cartaoXlCarregando/cartaoXlCarregando.module';
import {CartaoXlComponentModule} from './../cartaoXl/cartaoXl.module';
import {DetalheProdutosComponent} from './detalheProdutos.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DetalheProdutosRoutingModule} from './detalheProdutos-routing.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {EscolhaBotaoModule} from '../escolhaBotao/escolhaBotao.module';
import {CarregandoConfiguracaoPedidoModule} from '../carregandoConfiguracaoPedido/carregandoConfiguracaoPedido.module';
import {FormsModule} from '@angular/forms';
import {TextareaModule} from '../textarea/textarea.module';
import {PassoModule} from '../passo/passo.module';
import {PassoPizzaModule} from '../passo-pizza/passo-pizza.module';
import {ListaHorizontalProdutoModule} from '../lista-horizontal-produto/lista-horizontal-produto.module';
import {ConfirmacaoBotaoModule} from '../confirmacaoBotao/confirmacaoBotao.module';
import {QuantidadeBotaoModule} from '../quantidadeBotao/quantidadeBotao.module';
import {CartaoMultiplosPizzaModule} from '../cartao-multiplos-pizza/cartao-multiplos-pizza.module';

@NgModule({
  declarations: [DetalheProdutosComponent],
  imports: [
    CommonModule,
    DetalheProdutosRoutingModule,
    FontAwesomeModule,
    CartaoXlComponentModule,
    EscolhaBotaoModule,
    ConfirmacaoBotaoModule,
    QuantidadeBotaoModule,
    CartaoXlCarregandocomponentModule,
    CarregandoConfiguracaoPedidoModule,
    FormsModule,
    TextareaModule,
    InputtextModule,
    PassoModule,
    PassoPizzaModule,
    ListaHorizontalProdutoModule,
    CartaoMultiplosPizzaModule
  ]
})
export class DetalheProdutosModule {
}
