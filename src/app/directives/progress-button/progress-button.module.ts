import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressButtonDirective } from './progress-button.directive';

@NgModule({
  declarations: [ProgressButtonDirective],
  imports: [
    CommonModule
  ],
  exports: [ProgressButtonDirective]
})
export class ProgressButtonModule { }
