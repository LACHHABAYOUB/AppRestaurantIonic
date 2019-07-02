import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input('texto') texto: string;
  @Input('onClick') onClick: (Event) => {};
  @Input()ngStyle: { [klass: string]: any; };

  constructor() { }

  ngOnInit() {}

  onSelect(event) {
    if (this.onClick) {
      this.onClick(event);
    }
  }
}
