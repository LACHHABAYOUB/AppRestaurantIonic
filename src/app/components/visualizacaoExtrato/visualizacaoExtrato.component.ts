import { PedidoStateService } from '../../services/pedido.state.service';
import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-visualizacaoExtrato',
  templateUrl: './visualizacaoExtrato.component.html',
  styleUrls: ['./visualizacaoExtrato.component.scss']
})

export class visualizacaoExtratoComponent implements OnInit {
  @Input('mostrar') mostrar: boolean = false;
  @Input('onSolicitarConta') solicitarConta = (Event) => { };
  @Input('onFinalizarPedido') finalizarPedido = (Event) => { };
  @Input('onFinalizarProgreso') finalizarProgreso = () => { };

  progresoFinalizarPedido: number = 0;

  constructor(private storageService: StorageService) { }
  pedidos: object[];

  ngOnInit() { }

  ngOnChanges(obj) {
    this.progresoFinalizarPedido = 0;
    if (obj.mostrar.currentValue) {
      this.storageService.getItems().then(pedidos => {
        this.pedidos = pedidos;
      });
    }
  }

  onSolicitarConta = (event) => {
    if (this.solicitarConta) {
      this.solicitarConta(event);
    }
  }
}

