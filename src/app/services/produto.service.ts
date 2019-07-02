import {Injectable} from '@angular/core';
import {Utils} from '../helpers/utils';
import {HttpClient} from '@angular/common/http';
import {Produto} from '../model/produto/produto';
import {Classe} from '../model/classificacao/classe';
import {Adicional} from '../model/produto/adicional';
import {Ingrediente} from '../model/produto/ingrediente';
import {Tamanho} from '../model/produto/tamanho';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private _httpClient: HttpClient) {
  }

  obterPeloId(id: number): Promise<Produto> {
    return this._httpClient.get<Produto>(`${Utils.urlService}/produto/id/${id}`).toPromise();
  }

  obterPeloTipoTamanhoEQuantidadeSaborIgualOuMaior(tipoTamanho: string, quantidadeSabor: number): Promise<Produto[]> {
    return this._httpClient.get<Produto[]>(`${Utils.urlService}/produto/tamanho/${tipoTamanho}/quantidadesabor/${quantidadeSabor}/igualoumaior`).toPromise();
  }

  obterInstancias(produtos: Produto[]): Produto[] {
    return produtos.map(produto => this.obterInstancia(produto));
  }

  obterInstancia(produto: Produto): Produto {
    return Object.assign(ProdutoService.obterNovoProduto(), produto);
  }

  ordenarPorSelecionado(produtos: Produto[]): Produto[] {
    return produtos.sort((a, b) => (a.selecionado === b.selecionado) ? 0 : a.selecionado ? -1 : 1);
  }

  static obterNovoProduto(): Produto {
    let produto = new Produto();
    produto.classe = new Classe();
    produto.adicionals = new Array<Adicional>();
    produto.ingredientes = new Array<Ingrediente>();
    produto.tamanhos = new Array<Tamanho>();
    return produto;
  }

}
