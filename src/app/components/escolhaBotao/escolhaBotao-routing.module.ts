import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EscolhaBotaoComponent } from './escolhaBotao.component';

const routes: Routes = [
  {
    path: ':id',
    component: EscolhaBotaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class escolhaBotaoRoutingModule { }
