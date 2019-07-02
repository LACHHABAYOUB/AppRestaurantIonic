export class QuantidadeSabor {

  descricao: string;
  quantidade: number;
  selecionado: boolean;

  constructor(descricao?: string
    , quantidade?: number
    , selecionado?: boolean) {
    this.descricao = descricao;
    this.quantidade = quantidade;
    this.selecionado = selecionado;
  }
}
