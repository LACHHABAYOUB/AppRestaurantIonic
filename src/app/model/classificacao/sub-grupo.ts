export class SubGrupo {

  id: number;
  descricao: string;
  imagem: string;

  constructor(id?: number
    , descricao?: string
    , imagem?: string) {
    this.id = id;
    this.descricao = descricao;
    this.imagem = imagem;
  }
}
