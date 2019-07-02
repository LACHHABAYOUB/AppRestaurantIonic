import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatReal } from './formatReal.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [FormatReal],
  exports: [FormatReal]
})
export class FormatRealModule { }
