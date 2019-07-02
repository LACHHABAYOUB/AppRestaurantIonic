import { visualizacaoExtratoComponent } from './../../components/visualizacaoExtrato/visualizacaoExtrato.component';
import { ExtratoModule } from './../../components/extrato/extrato.module';
import { AndamentoModule } from './../../components/andamento/andamento.module';
import { PainelPedidosModule } from './../../components/painelPedidos/painelPedidos.module';
import { FinalizacaoPedidoModule } from './../../components/finalizacao-pedido/finalizacaoPedido.module';
import { MenuCarregandoModule } from './../../components/menuCarregando/menuCarregando.modules';
import { HomePage } from './home.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuModule } from 'src/app/components/menu/menu.modules';
import { HeadModule } from 'src/app/components/head/head.modules';
import { ProdutosListModule } from 'src/app/components/produtosList/produtosList.modules';
import { ProdutosFundoModule } from 'src/app/components/produtosFundo/produtosFundo.modules';
import { ClasseService } from 'src/app/services/classe.service';
import { HttpClientModule } from '@angular/common/http';
import { CartaoCarregandoComponentModule } from './../../components/cartaoCarregando/cartaoCarregando.module';
import { ProdutosFundoCarregandoFundoModule } from 'src/app/components/produtosFundoCarregando/produtosFundoCarregando.modules';
import { EscolhaBotaoModule } from 'src/app/components/escolhaBotao/escolhaBotao.module';
import { ConteinerProdutosComponentModule } from 'src/app/components/conteinerProdutos/conteinerProdutos.module';
import { DetalheProdutosModule } from 'src/app/components/detalheProdutos/detalheProdutos.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PedidoPreparoModule } from 'src/app/components/pedidoPreparo/pedidoPreparo.module';
import { FormatRealModule } from 'src/app/pipes/formatReal.module';
import { visualizacaoExtratoModule } from 'src/app/components/visualizacaoExtrato/visualizacaoExtrato.module';
import { SlideshowModule } from 'src/app/components/slideshow/slideshow.module';

@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    IonicModule,
    MenuModule,
    MenuCarregandoModule,
    HeadModule,
    ProdutosListModule,
    ProdutosFundoModule,
    ProdutosFundoCarregandoFundoModule,
    DetalheProdutosModule,
    HttpClientModule,
    CartaoCarregandoComponentModule,
    ConteinerProdutosComponentModule,
    FinalizacaoPedidoModule,
    EscolhaBotaoModule,
    FontAwesomeModule,
    PainelPedidosModule,
    PedidoPreparoModule,
    AndamentoModule,
    ExtratoModule,
    FormatRealModule,
    visualizacaoExtratoModule,
    SlideshowModule
  ],
  providers: [
    ClasseService
  ]
})
export class HomeModule { }
