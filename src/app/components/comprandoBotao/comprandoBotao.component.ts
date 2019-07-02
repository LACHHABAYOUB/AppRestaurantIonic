import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comprandoBotao',
  templateUrl: './comprandoBotao.component.html',
  styleUrls: ['./comprandoBotao.component.scss']
})
export class comprandoBotaoComponent implements OnInit {
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
