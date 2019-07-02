import {Classe} from '../classificacao/classe';
import {Adicional} from './adicional';
import {Ingrediente} from './ingrediente';
import {Tamanho} from './tamanho';
import {TipoProduto} from './tipo-produto.enum';
import {Utils} from '../../helpers/utils';

export class Produto {

  id: number;
  descricao: string;
  subDescricao: string;
  preco: number;
  imagem: string;
  tipoProduto: TipoProduto;
  classe: Classe;
  adicionals: Adicional[];
  ingredientes: Ingrediente[];
  tamanhos: Tamanho[];
  selecionado: boolean;

  constructor(id?: number
    , descricao?: string
    , subDescricao?: string
    , preco?: number
    , imagem?: string
    , tipoProduto?: TipoProduto
    , classe?: Classe
    , adicionals?: Adicional[]
    , ingredientes?: Ingrediente[]
    , tamanhos?: Tamanho[]
    , selecionado?: boolean) {
    this.id = id;
    this.descricao = descricao;
    this.subDescricao = subDescricao;
    this.preco = preco;
    this.imagem = imagem;
    this.tipoProduto = tipoProduto;
    this.classe = classe;
    this.adicionals = adicionals;
    this.ingredientes = ingredientes;
    this.tamanhos = tamanhos;
    this.selecionado = selecionado;
  }

  obterPrecoFormatado(): string {
    return Utils.formatReal(this.preco);
  }

}
