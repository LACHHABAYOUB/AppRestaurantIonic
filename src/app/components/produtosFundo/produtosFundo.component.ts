import { ClasseStateService } from '../../services/classe.state.service';
import { ProdutosListComponent } from './../produtosList/produtosList.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-produtosFundo',
  templateUrl: './produtosFundo.component.html',
  styleUrls: ['./produtosFundo.component.scss']
})
export class ProdutosFundoComponent implements OnInit {
  @ViewChild(ProdutosListComponent) produtosList: ProdutosListComponent;
  classes: any[];
  check: boolean;
  listaClasses = this.classeStateService.lista;

  constructor(private classeStateService: ClasseStateService) {
  }

  ngOnInit() {
  }
  
  trackItems(index, item) {
    return item.id;
  }
}
