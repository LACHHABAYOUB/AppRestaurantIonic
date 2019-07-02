import {Injectable} from '@angular/core';
import {TipoTamanho} from '../../model/produto/tipo-tamanho.enum';

@Injectable({
  providedIn: 'root'
})
export class TamanhoService {

  constructor() {
  }

  obterTipoTamanho(descricao: string): string {
    return Object.keys(TipoTamanho).filter((key) => TipoTamanho[key] === descricao)[0];
  }

}
