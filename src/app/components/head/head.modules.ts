import { AndamentoModule } from './../andamento/andamento.module';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [CommonModule, AndamentoModule],
    declarations: [HeadComponent],
    exports: [HeadComponent],
    providers: []
})

export class HeadModule {
}