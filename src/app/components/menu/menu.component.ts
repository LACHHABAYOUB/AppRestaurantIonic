import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() items: [];
  itemsLista: {
    id: 0, name: "Item", imageUrl: "", active: true
  }[];
  @Input('onSelecionar') onSelecionar: (IdItemSelecionado: number, itemLista: Array<object>, Event) => {}
  @Input('placeHolderImagems') placeHolderImagems: string[] = [''];

  constructor() { }

  ngOnInit() {
    this.itemsLista = this.items.map((item, index) => {
      item = Object.assign(item, {
        active: index === 0 ? true : false
      });
      return item;
    });
  }

  selecionarItem(event) {
    const idItem = parseInt(event.target.id);
    const novosItems = this.itemsLista.map((item) => {
      if (item.id === idItem) {
        item = Object.assign({}, item, {
          active: true
        });
      } else {
        item = Object.assign({}, item, {
          active: false
        });
      }
      return item;
    });

    this.itemsLista = novosItems;
    if (this.onSelecionar) {
      this.onSelecionar(idItem, novosItems, event);
    }
  }

  //funcao para melhorar o performance de os loops
  //https://netbasal.com/angular-2-improve-performance-with-trackby-cc147b5104e5
  trackItems(index, item) {
    return item.id;
  }

  onError(event) {
    const min = 0;
    const max = Math.floor(this.placeHolderImagems.length);
    const index = Math.floor(Math.random() * (max - min)) + min;
    event.target.src = this.placeHolderImagems[index];
  }
}
