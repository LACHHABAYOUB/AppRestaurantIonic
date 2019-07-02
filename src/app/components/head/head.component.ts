import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss'],
})

export class HeadComponent implements OnInit {
  @ViewChild(Content)
  @Input('mesa') mesa: number = 0;
  dataHorarioAtualMilisegs = Date.now();

  constructor() { }

  ngOnInit() {
  }
}