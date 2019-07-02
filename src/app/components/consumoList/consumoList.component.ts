import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-consumoList',
  templateUrl: './consumoList.component.html',
  styleUrls: ['./consumoList.component.scss']
})

export class ConsumoListComponent implements OnInit {
  @Input('pedidos') pedidos: [];

  constructor() { }

  ngOnInit() { }
}