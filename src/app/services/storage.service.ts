import {PedidoStateService} from './pedido.state.service';
import {ItemPedido} from '../model/pedido/item-pedido';
import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

const ITEMS_KEY = 'PEDIDOS';
const HA_PEDIDOS_EM_ANDAMENTO = 'HA_PEDIDOS_EM_ANDAMENTO';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private storage: Storage,
    private _pedidoStateService: PedidoStateService
  ) {
  }

  // CREATE
  addItem(item: ItemPedido): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: ItemPedido[]) => {
      if (items) {
        items.push(item);
        return this.storage.set(ITEMS_KEY, items);
      } else {
        return this.storage.set(ITEMS_KEY, [item]);
      }
    });
  }

  // READ
  getItems(): Promise<ItemPedido[]> {
    return this.storage.get(ITEMS_KEY);
  }

  // clear
  clearItems() {
    return this.storage.set(ITEMS_KEY, null);
  }

  // calcular valor total
  calcularValorTotalOrdem = () => {
    this.getItems().then((pedidos) => {
      if (!pedidos || pedidos.length === 0) {
        this._pedidoStateService.ordem.valorTotal = 0;
      } else {
        const total = pedidos.reduce(function (accumulator, pedido) {
          return accumulator + pedido.valorTotal;
        }, 0);
        this._pedidoStateService.ordem.valorTotal = total;
      }
    });
  };

  calcularNumeroItens() {
    this.getItems().then((items) => {
      this._pedidoStateService.ordem.pedidosPendentes = items ? items.length : 0;
    });
  }

  setHaPedidosEmAmdamento(status: boolean) {
    return this.storage.set(HA_PEDIDOS_EM_ANDAMENTO, status);
  }

  getHaPedidosEmAmdamento() {
    return this.storage.get(HA_PEDIDOS_EM_ANDAMENTO);
  }
}
