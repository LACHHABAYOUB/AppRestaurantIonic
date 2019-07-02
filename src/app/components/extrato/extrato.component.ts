import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AnimationStateService } from 'src/app/services/animation.state.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  @Input('valor') valor: string = '';
  @Input('itensFinalizados') itensFinalizados: number = 0;
  @Output('onVerExtrato') verExtrato = new EventEmitter();

  @Input() ngStyle: { [klass: string]: any; };

  constructor() { }

  ngOnInit() {
  }

  onVerExtrato() {
    this.verExtrato.emit({});
  }
}
