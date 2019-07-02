import { CartaoComponent } from './cartao.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormatRealModule } from 'src/app/pipes/formatReal.module';

@NgModule({
  imports: [CommonModule, RouterModule, FormatRealModule],
  declarations: [CartaoComponent],
  exports: [CartaoComponent],
  providers: []
})

export class CartaoComponentModule { }
