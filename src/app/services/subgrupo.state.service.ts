import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubGrupoStateService {
  public listaSubGrupos: any[] = [];

  public lista = {
    'subgrupos': []
  };

  public isLoading = {
    'subgrupos': false
  };

  constructor() { }
}
