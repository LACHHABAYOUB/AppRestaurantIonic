import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        loadChildren: './../../components/conteinerProdutos/conteinerProdutos.module#ConteinerProdutosComponentModule'
      },
      {
        path: 'produto',
        loadChildren: './../../components/detalheProdutos/detalheProdutos.module#DetalheProdutosModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }