import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appColorButton]'
})
export class ColorButtonDirective implements OnInit {
  @Input('appColorButton') highlightColor: string;
  @Input('selected') selected: boolean;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.colorButton(this.highlightColor, this.selected);
  }

  ngOnChanges(obj) {
    this.colorButton(this.highlightColor, obj.selected.currentValue);
  }

  private colorButton(color: any, selected) {
    if (!selected) {
      this.el.nativeElement.children[0].style.backgroundColor = '';
      this.el.nativeElement.children[0].classList.remove('selected');
    } else {
      this.el.nativeElement.children[0].classList.add('selected');
      this.el.nativeElement.children[0].style.backgroundColor = color;
    }
  }
}
