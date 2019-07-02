import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-inputtext',
  templateUrl: './inputtext.component.html',
  styleUrls: ['./inputtext.component.scss']
})
export class InputtextComponent implements OnInit {

  @Input('maxlength') maxlength: number = 50;
  @Input('placeholder') placeholder: string;
  @Output() onChange = new EventEmitter();

  textoLength: number = 0;

  constructor() {
  }

  ngOnInit() {
  }

  onKeyUp(event) {
    this.textoLength = event.currentTarget.value.length;
    this.onChange.emit({value: event.currentTarget.value});
  }
}
