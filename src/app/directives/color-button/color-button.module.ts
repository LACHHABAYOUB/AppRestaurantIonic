import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ColorButtonDirective} from './colorButton.directive';

@NgModule({
  declarations: [ColorButtonDirective],
  imports: [
    CommonModule
  ],
  exports: [ColorButtonDirective]
})
export class ColorButtonModule { }
