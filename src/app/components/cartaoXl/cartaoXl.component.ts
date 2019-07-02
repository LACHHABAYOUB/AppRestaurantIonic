import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cartao-xl',
  templateUrl: './cartaoXl.component.html',
  styleUrls: ['./cartaoXl.component.scss'],
})
export class CartaoXlComponent implements OnInit {
  @Input('imgSrc') imageUrl: string; 
  @Input('titulo') titulo: string; 
  @Input('legenda') legenda: string; 
  @Input('descricao') descricao: string; 
  @Input('placeHolderImagem') placeHolderImagem: string = '';
  constructor() { }

  ngOnInit() { }

  onError(event) {
    event.target.src = this.placeHolderImagem;
  }

}
