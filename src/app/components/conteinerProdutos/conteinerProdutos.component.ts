import { Component, OnInit } from '@angular/core';
import { ClasseStateService } from 'src/app/services/classe.state.service';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-conteiner-produtos',
  templateUrl: './conteinerProdutos.component.html',
  styleUrls: ['./conteinerProdutos.component.scss'],
})
export class ConteinerProdutosComponent implements OnInit {
  faHamburger = faHamburger;
  carregandoProdutos = this.classeStateService.isLoading;
  existemProdutos = this.classeStateService.existemProdutos;

  constructor(private classeStateService: ClasseStateService) {
  }

  ngOnInit() {
  }
}
