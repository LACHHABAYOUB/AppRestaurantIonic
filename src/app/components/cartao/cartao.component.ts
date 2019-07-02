import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.scss'],
})
export class CartaoComponent implements OnInit {
  @Input('id') id: string;
  @Input('imagemUrl') imagemUrl: string;
  @Input('titulo') titulo: string;
  @Input('legenda') legenda: string;
  @Input('descricao') descricao: string;
  @Input('onSelecionar') onSelecionar: (id: string, Event) => {};
  @Input('placeHolderImagem') placeHolderImagem: string = '';

  constructor() { }

  ngOnInit() { }

  onClick(event) {
    if (this.onSelecionar) {
      this.onSelecionar(this.id, event);
    }
  }

  onPress(event) {
    if (this.onSelecionar) {
      this.onSelecionar(this.id, event);
    }
  }

  onError(event) {
    event.target.src = this.placeHolderImagem;
  }
}
