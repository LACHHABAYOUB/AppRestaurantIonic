import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { InputtextComponent } from './inputtext.component';

@NgModule({
  imports: [CommonModule,FormsModule],
  declarations: [InputtextComponent],
  exports: [InputtextComponent]
})
export class InputtextModule { }
