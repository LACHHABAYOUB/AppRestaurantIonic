import { ItemPedido } from './item-pedido';

export class PedidoDTO {
  idOrdemPedido: 0;
  itensPedido: ItemPedido[];
  mesa: string;
  valorTotal: number;

  constructor(
    itensPedido?: ItemPedido[],
    mesa?: string,
    valorTotal?: number) {
    this.itensPedido = itensPedido;
    this.mesa = mesa;
    this.valorTotal = valorTotal;
  }
}