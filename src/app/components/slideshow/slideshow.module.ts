import { ButtonModule } from '../button/button.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowComponent } from './slideshow.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
  ],
  declarations: [SlideshowComponent],
  exports: [SlideshowComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class SlideshowModule { }
