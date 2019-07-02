import { StorageService } from 'src/app/services/storage.service';
import { Injectable } from '@angular/core';
import { ItemPedido } from '../../model/pedido/item-pedido';
import { SubItemPedido } from '../../model/pedido/sub-item-pedido';
import { InfoItemPedido } from '../../model/pedido/info-item-pedido';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { PedidoDTO } from 'src/app/model/pedido/pedido-dto';
import { Utils } from 'src/app/helpers/utils';
import {Produto} from '../../model/produto/produto';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private _storageService: StorageService, private httpClient: HttpClient) { }

  obterNovoItemPedido(): ItemPedido {
    let itemPedido: ItemPedido = new ItemPedido();
    itemPedido.produtos = new Array<Produto>();
    itemPedido.deQuemE = '';
    itemPedido.observacao = '';
    itemPedido.quantidade = 1;
    itemPedido.valorUnitario = 0;
    itemPedido.valorTotal = 0;
    itemPedido.subItensPedido = new Array<SubItemPedido>();
    itemPedido.infoItensPedido = new Array<InfoItemPedido>();
    return itemPedido;
  }

  async guardarPedido(mesa: string, valorTotal: number): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    let pedidos = await this._storageService.getItems();
    const pedido = new PedidoDTO();
    pedido.mesa = mesa;
    pedido.valorTotal = valorTotal;
    pedido.itensPedido = pedidos;
    return this.httpClient.post(`${Utils.urlService}/pedido`, JSON.stringify(pedido), httpOptions).toPromise();
  }

  getPedidosEmAndamento(mesa: string) {
    return this.httpClient.get(`${Utils.urlService}/pedido/mesa/${mesa}/situacao/EMANDAMENTO`).toPromise();
  }

  getPedidosFinalizados(mesa: string) {
    return this.httpClient.get(`${Utils.urlService}/pedido/mesa/${mesa}/situacao/FINALIZADO`).toPromise();
  }

}
