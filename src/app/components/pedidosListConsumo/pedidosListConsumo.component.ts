import { Component, OnInit, Input } from '@angular/core';
import { PedidoStateService } from 'src/app/services/pedido.state.service';

@Component({
  selector: 'app-pedidosListConsumo',
  templateUrl: './pedidosListConsumo.component.html',
  styleUrls: ['./pedidosListConsumo.component.scss']
})

export class PedidosListConsumoComponent implements OnInit {
  @Input('pedidos') pedidos = [];

  constructor(private _pedidoStateService: PedidoStateService) { }
  dataHorarioAtualMilisegs = Date.now();
  ngOnInit() { }
}