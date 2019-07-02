import {PedidoStateService} from '../../services/pedido.state.service';
import {Component, Input, OnInit} from '@angular/core';
import {StorageService} from 'src/app/services/storage.service';
import {PedidoService} from '../../services/pedido/pedido.service';
import {ItemPedido} from '../../model/pedido/item-pedido';
import { AnimationStateService } from 'src/app/services/animation.state.service';

@Component({
  selector: 'app-painelPedidos',
  templateUrl: './painelPedidos.component.html',
  styleUrls: ['./painelPedidos.component.scss']
})

export class PainelPedidosComponent implements OnInit {
  @Input('mostrar') mostrar: boolean = false;
  @Input('onAdicionarMaisItems') adicionarMaisItems = (Event) => {};
  @Input('onFinalizarPedido') finalizarPedido = (Event) => {};
  @Input('onFinalizarProgreso') finalizarProgreso = () => {};

  progresoFinalizarPedido: number = 0;

  constructor(private storageService: StorageService
    , private animationStateService: AnimationStateService
    , private _pedidoStateService: PedidoStateService
    , private _pedidoService: PedidoService) {
  }

  itensPedido: ItemPedido[];

  ngOnInit() {
  }

  async ngOnChanges() {
    this.progresoFinalizarPedido = 0;
    if (this.mostrar) {
      try {
        this.itensPedido = (await this.storageService.getItems()).map(p => Object.assign(this._pedidoService.obterNovoItemPedido(), p));
      } catch (e) {
        console.error('Erro ao carregar itens do pedido do storage', e);
      }
    }
  }

  onAdicionarMaisItems = (event) => {
    if (this.adicionarMaisItems) {
      this.adicionarMaisItems(event);
      this.storageService.calcularNumeroItens();
    }
  };

  onFinalizarPedido = (event) => {
    this.atualizarPorcentagem();
    if (this.finalizarPedido) {
      this.finalizarPedido(event);
    }
    this.animationStateService.panelPedidos.mostrar = false;
  };

  atualizarPorcentagem = () => {
    let width = 1;
    let self = this;
    let identity = setInterval(
      function scene() {
        if (width >= 100) {
          clearInterval(identity);
        } else {
          width = width + 3;
          self.progresoFinalizarPedido = width;
        }
      }
      , 40);
  };

  onFinalizarProgreso = () => {
    if (this.finalizarProgreso) {
      this.finalizarProgreso();
    }
  };
}

