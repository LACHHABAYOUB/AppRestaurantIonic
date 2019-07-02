import {Component, Input, OnInit} from '@angular/core';
import {Produto} from '../../model/produto/produto';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-container-produto-resumido',
  templateUrl: './container-produto-resumido.component.html',
  styleUrls: ['./container-produto-resumido.component.scss'],
})
export class ContainerProdutoResumidoComponent implements OnInit {

  faCheckCircle = faCheckCircle;
  @Input() produto: Produto;
  @Input() placeHolderImage: string;

  constructor() {
  }

  ngOnInit() {
  }

  obterImagemPadrao(event) {
    event.target.src = this.placeHolderImage;
  }

}
