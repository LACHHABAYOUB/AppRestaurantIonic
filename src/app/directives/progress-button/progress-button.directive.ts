import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appProgressButton]'
})
export class ProgressButtonDirective {
  @Input('progress') progress: number;
  @Input('onFinalizarProgreso') onFinalizarProgreso = () => { }

  constructor(private elementRef: ElementRef) { }

  ngOnChanges(obj) {
    this.changeElementWidth(obj.progress.currentValue);
  }

  changeElementWidth = (width: number) => {
    this.elementRef.nativeElement.childNodes[0].childNodes[0].style.width = `${width}%`;

    if (`${width}` === '100') {
      this.onFinalizarProgreso();
    }
  }
}
