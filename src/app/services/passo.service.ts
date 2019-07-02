import {Utils} from '../helpers/utils';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PassoProduto} from '../model/passo/passo-produto';
import {TipoPasso} from '../model/passo/tipo-passo.enum';
import {TipoCampo} from '../model/passo/tipo-campo.enum';
import {ItemPasso} from '../model/passo/item-passo';

@Injectable({
  providedIn: 'root'
})
export class PassoService {

  constructor(public httpClient: HttpClient) {
  }

  obterPeloIdProduto(idProduto: number): Promise<PassoProduto[]> {
    return this.httpClient.get<PassoProduto[]>(`${Utils.urlService}/passo/passo-produto/produto/${idProduto}`).toPromise();
  }

  obterPeloIdProdutoETipoPasso(idProduto: number, tipoPasso: TipoPasso): Promise<PassoProduto[]> {
    return this.httpClient.get<PassoProduto[]>(`${Utils.urlService}/passo/passo-produto/produto/${idProduto}/tipopasso/${tipoPasso}`).toPromise();
  }

  obterInstancias(passosProduto: PassoProduto[]): PassoProduto[] {
    return passosProduto.map(passoProduto => Object.assign(PassoService.obterNovoPassoProduto(), passoProduto));
  }

  static obterNovoPassoProduto() {
    let passoProduto: PassoProduto = new PassoProduto();
    passoProduto.descricao = '';
    passoProduto.ordem = 0;
    passoProduto.tipoPasso = TipoPasso.ADICIONAL;
    passoProduto.tipoCampo = TipoCampo.CHECKBOX;
    passoProduto.itens = new Array<ItemPasso>();
    return passoProduto;
  }

  static obterNovoItemPasso() {
    return new ItemPasso();
  }

}
