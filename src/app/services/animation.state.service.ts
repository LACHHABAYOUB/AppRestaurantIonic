import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationStateService {

  public panelPedidos = {
    'mostrar': false,
    'showBackdrop': false
  };

  public ordemConfirmacao = {
    'mostrar': false
  };

  public botaoEnviarPedido = {
    'mostrar': false
  };
  public visulizacaoExtrato = {
    'mostrar': false
  };

  public slide = {
    'mostrar': true // when you want change image change to true
  };
  constructor() { }
}
