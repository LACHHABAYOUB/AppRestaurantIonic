import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { TextareaComponent } from './textarea.component';

@NgModule({
  imports: [CommonModule,FormsModule],
  declarations: [TextareaComponent],
  exports: [TextareaComponent]
})
export class TextareaModule { }
