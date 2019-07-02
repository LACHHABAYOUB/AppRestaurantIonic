import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
  @Input('maxlength') maxlength: string;
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
