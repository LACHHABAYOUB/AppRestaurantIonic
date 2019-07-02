import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtosList',
  templateUrl: './produtosList.component.html',
  styleUrls: ['./produtosList.component.scss'],
})
export class ProdutosListComponent implements OnInit {
  @Input() produtos: [];
  listaProdutos = [];

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() { }

  selecionarProduto = (id, event) => {
    this.router.navigate(['/home/produto', id]);
  }
}
