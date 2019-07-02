import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PedidoStateService {

    public ordem = {
        'valorTotal': 0,
        'pedidosPendentes': 0
    };

    public produtosPedido = {
        'numero': 0
    };

    public ItensPedidosCompletados = {
        'numero': 0
    };

    public totalExtrato = {
        'valor': '0'
    }

    constructor() { }
}
