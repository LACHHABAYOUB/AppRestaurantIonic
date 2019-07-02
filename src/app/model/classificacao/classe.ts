import {SubGrupo} from './sub-grupo';

export class Classe {

  id: number;
  descricao: string;
  subGrupo: SubGrupo;

  constructor(id?: number
    , descricao?: string
    , subGrupo?: SubGrupo) {
    this.id = id;
    this.descricao = descricao;
    this.subGrupo = subGrupo;
  }
}
