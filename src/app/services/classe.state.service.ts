import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClasseStateService {
  public listaClasses: any[] = [];

  public lista = {
    'classes': []
  };

  public existemProdutos = {
    'classes': false
  }

  public isLoading = {
    'classes': false
  };

  constructor() { }
}
