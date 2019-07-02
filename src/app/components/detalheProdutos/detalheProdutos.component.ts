import {PassoService} from '../../services/passo.service';
import {ProdutoService} from '../../services/produto.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import {ItemPedido} from '../../model/pedido/item-pedido';
import {Produto} from '../../model/produto/produto';
import {PassoProduto} from '../../model/passo/passo-produto';
import {TipoCampo} from '../../model/passo/tipo-campo.enum';
import {PedidoService} from '../../services/pedido/pedido.service';
import {SubItemPedido} from '../../model/pedido/sub-item-pedido';
import {TipoPasso} from '../../model/passo/tipo-passo.enum';
import {InfoItemPedido} from '../../model/pedido/info-item-pedido';
import {StorageService} from '../../services/storage.service';
import {AnimationStateService} from '../../services/animation.state.service';
import {TamanhoService} from '../../services/produto/tamanho.service';
import {ConfigPizza} from '../../model/produto/config-pizza';
import {ItemPasso} from '../../model/passo/item-passo';
import {TipoTamanho} from '../../model/produto/tipo-tamanho.enum';

@Component({
  selector: 'app-detalheProdutos',
  templateUrl: './detalheProdutos.component.html',
  styleUrls: ['./detalheProdutos.component.scss']
})
export class DetalheProdutosComponent implements OnInit {

  itemPedido: ItemPedido;
  configPizza: ConfigPizza = new ConfigPizza();

  idProdutoPrincipal: number = 0;
  carregandoProduto: boolean = false;
  carregandoProdutoPasso: boolean = false;
  errorMensagemProduto: string = '';
  errorMesagemProdutoPasso: string = '';
  passos: PassoProduto[];
  faExclamationTriangle = faExclamationTriangle;

  constructor(
    private _route: ActivatedRoute,
    private _produtoService: ProdutoService,
    private _passoService: PassoService,
    private _pedidoService: PedidoService,
    private _tamanhoService: TamanhoService,
    private _storageService: StorageService,
    private _animationStateService: AnimationStateService
  ) {
    this.idProdutoPrincipal = parseInt(this._route.snapshot.paramMap.get('id'));
  }

  async ngOnInit() {
    this.itemPedido = this._pedidoService.obterNovoItemPedido();
    await this.obterProdutoEIncluirNoItemPedido(this.idProdutoPrincipal);
    await this.carregarPassos(this.idProdutoPrincipal);
    this.definirPrecoProduto(TipoPasso.TAMANHO);
    this.atualizarValoresDoItemPedido();
  }

  private async obterProdutoEIncluirNoItemPedido(idProduto: number) {
    try {
      this.carregandoProduto = true;
      let produto = this._produtoService.obterInstancia(await this._produtoService.obterPeloId(idProduto));
      if (produto) {
        this.itemPedido.incluirProduto(produto);
      }
    } catch (err) {
      this.errorMensagemProduto = 'Error ao carregar o produto, entre em contato com o administrador por favor.';
      console.error(err);
    } finally {
      this.carregandoProduto = false;
    }
  }

  private async carregarPassos(idProduto: number) {
    try {
      this.passos = new Array<PassoProduto>();
      this.carregandoProdutoPasso = true;
      let passosProduto = await this._passoService.obterPeloIdProduto(idProduto);
      if (passosProduto) {
        this.passos = this._passoService.obterInstancias(passosProduto);
        this.selecionarValoresPadroesDosItensPassos();
      }
    } catch (err) {
      this.errorMesagemProdutoPasso = 'Error ao carregar configuração do passo, entre em contato com o administrador por favor.';
      console.error(err);
    } finally {
      this.carregandoProdutoPasso = false;
    }
  }

  private async obterPassosESelecionarDeAcordoComPassosAnterior(idProduto: number) {
    let passosAnterior = this._passoService.obterInstancias(this.passos);
    await this.carregarPassos(idProduto);
    this.passos.forEach(passo => {
      let passoAnterior = passosAnterior.find(p => p.tipoPasso === passo.tipoPasso);
      if (passoAnterior) {
        let itensSelecionados = passoAnterior.obterItensSelecionados();
        passo.itens.forEach(item => item.selecionado = !!itensSelecionados.find(i => i.idProduto === item.idProduto));
      }
    });
  }

  private selecionarValoresPadroesDosItensPassos() {
    this.passos
      .forEach(passo =>
        passo.tipoCampo === TipoCampo.RADIO
          ? passo.itens.forEach((item, i) => item.selecionado = (i == 0))
          : passo.itens.forEach(item => item.selecionado = false));
  }

  private selecionarItemPasso(item) {
    this.passos
      .filter(value => value.id == item.referencia)
      .forEach(passoProduto => {
        passoProduto.tipoCampo === TipoCampo.RADIO
          ? passoProduto.itens.forEach(itemPasso => itemPasso.selecionado = itemPasso.id === item.item.id)
          : passoProduto.itens.forEach(itemPasso => itemPasso.id === item.item.id ? itemPasso.selecionado = !itemPasso.selecionado : null);
      });
  }

  private async carregarProdutosHorizontal() {
    this.configPizza.produtosHorizontal = this.configPizza.quantidadeSaborSelecionado > 1 ? await this.obterProdutosHorizontal() : [];
  }

  private atualizarPrecosProdutosDeAcordoComPrecoDosProdutosHorizontal() {
    if (this.configPizza.produtosHorizontal && this.configPizza.produtosHorizontal.length > 0) {
      this.itemPedido.produtos
        .forEach(p => {
          let produto = this.configPizza.obterProduto(p);
          if (produto) {
            p.preco = produto.preco;
          }
        });
    } else {
      this.definirPrecoProduto(TipoPasso.TAMANHO);
    }
  }

  private definirPrecoProduto(tipoPasso: TipoPasso) {
    let passo = this.obterPasso(tipoPasso);
    if (passo) {
      let itemPasso = passo.obterItensSelecionados()[0];
      this.itemPedido.alterarPrecoProduto(itemPasso.idProduto, itemPasso.preco);
    }
  }

  private processarProdutosHorizontal() {
    if (this.configPizza.produtosHorizontalNaoEstaVazio()) {
      this.excluirProdutosQueNaoEstaoNosProdutosHorizontal();
      this.configPizza.produtosHorizontal.forEach(produtoHorizontal => produtoHorizontal.selecionado = this.itemPedido.contemProduto(produtoHorizontal));
      this._produtoService.ordenarPorSelecionado(this.configPizza.produtosHorizontal);
    }
  }

  private async obterProdutosHorizontal(): Promise<Produto[]> {
    let produtos = await this._produtoService.obterPeloTipoTamanhoEQuantidadeSaborIgualOuMaior(this.configPizza.tipoTamanho, this.configPizza.quantidadeSaborSelecionado);
    return produtos ? this._produtoService.obterInstancias(produtos) : produtos;
  }

  private excluirProdutosDoFinalDaFilaDeAcordoComQuantidadeSaborSelecionado() {
    if (this.itemPedido.produtos.length > this.configPizza.quantidadeSaborSelecionado) {
      let diferencaQuantidade = this.itemPedido.produtos.length - this.configPizza.quantidadeSaborSelecionado;
      this.itemPedido.excluirProdutosDoFinalDaFila(diferencaQuantidade);
    }
  }

  private excluirProdutosQueNaoEstaoNosProdutosHorizontal() {
    this.itemPedido
      .produtos
      .forEach(produto => {
        if (!this.configPizza.contemProduto(produto)) {
          this.itemPedido.removerProduto(produto);
        }
      });
  };

  private async obterPassoTamanhoESelecionarDeAcordoComTipoTamanhoEQuantidadeSabor() {
    let passo = this.obterPasso(TipoPasso.TAMANHO);
    if (passo && passo.itens) {
      let itemPassoSelecionado = passo.itens.filter(item => item.descricao === TipoTamanho[this.configPizza.tipoTamanho])[0];
      this.configPizza.quantidadeSaborSelecionado = itemPassoSelecionado.quantidadeMaxima >= this.configPizza.quantidadeSaborSelecionado ? this.configPizza.quantidadeSaborSelecionado : itemPassoSelecionado.quantidadeMaxima;
      await this.onSelecionarItemPassoPizza({
        referencia: passo.id,
        item: itemPassoSelecionado,
        quantidadeSelecionado: this.configPizza.quantidadeSaborSelecionado
      });
    }
  }

  private obterPasso(tipoPasso: TipoPasso): PassoProduto {
    return this.passos.filter(passo => passo.tipoPasso === tipoPasso)[0];
  }

  private async agregarItensPassoDosProdutos(tipoPasso: TipoPasso) {
    let itensPasso = await this.obterItensPassoDosProdutos(tipoPasso);
    let passo = this.passos.filter(p => p.tipoPasso === tipoPasso);
    if (passo && passo.length > 0) {
      let itensFiltrado = this.filtrarPeloIdProdutoENotIdEPrecoMaior(itensPasso);
      itensFiltrado.forEach(item => item.selecionado = !!passo[0].itens.find(i => i.selecionado && i.idProduto === item.idProduto));
      passo[0].itens = itensFiltrado;
    }
  }

  private async obterItensPassoDosProdutos(tipoPasso: TipoPasso): Promise<ItemPasso[]> {
    let itensPasso = new Array<ItemPasso>();
    for (let produto of this.itemPedido.produtos) {
      let passo = await this._passoService.obterPeloIdProdutoETipoPasso(produto.id, tipoPasso);
      if (passo) {
        itensPasso.push(...passo[0].itens.map(item => Object.assign(PassoService.obterNovoItemPasso(), item)));
      }
    }
    return itensPasso;
  };

  private filtrarPeloIdProdutoENotIdEPrecoMaior(itensPasso: ItemPasso[]): ItemPasso[] {
    return itensPasso.filter((item, i, array) => !array.find(arr => arr.idProduto === item.idProduto && arr.id !== item.id && arr.preco > item.preco));
  }

  private obterSubItensPedidoSelecionados(): SubItemPedido[] {
    let subItemPedidos = new Array<SubItemPedido>();
    this.passos.forEach(passoProduto => {
      switch (passoProduto.tipoPasso) {
        case TipoPasso.ADICIONAL:
        case TipoPasso.INGREDIENTE:
        case TipoPasso.COMBO:
          subItemPedidos.push(...passoProduto.obterItensSelecionados().map(item => new SubItemPedido(item.idProduto, item.quantidade, item.preco, item.obterValorTotal(), passoProduto.tipoPasso)));
      }
    });
    return subItemPedidos;
  }

  private obterInfoItensPedidoSelecionados(): InfoItemPedido[] {
    let infoItensPedido = new Array<InfoItemPedido>();
    this.passos.forEach(passoProduto => {
      switch (passoProduto.tipoPasso) {
        case TipoPasso.GENERICO:
        case TipoPasso.TAMANHO:
          infoItensPedido.push(...passoProduto.obterItensSelecionados().map(item => new InfoItemPedido(item.descricao, passoProduto.tipoPasso)));
      }
    });
    return infoItensPedido;
  }

  private atualizarValoresDoItemPedido() {
    this.itemPedido.subItensPedido = this.obterSubItensPedidoSelecionados();
    this.itemPedido.infoItensPedido = this.obterInfoItensPedidoSelecionados();
    this.itemPedido.calcularValorUnitario();
    this.itemPedido.calcularValorTotal();
  }

  onSelecionarItemPasso(item) {
    this.selecionarItemPasso(item);
    this.atualizarValoresDoItemPedido();
  }

  async onSelecionarItemPassoPizza(item) {
    this.selecionarItemPasso(item);
    this.configPizza.quantidadeSaborSelecionado = item.quantidadeSelecionado;
    this.configPizza.tipoTamanho = this._tamanhoService.obterTipoTamanho(item.item.descricao);

    if (!this.itemPedido.isPrimeiroProduto(item.item.idProduto)) {
      await this.obterPassosESelecionarDeAcordoComPassosAnterior(this.itemPedido.produtos[0].id);
      await this.obterPassoTamanhoESelecionarDeAcordoComTipoTamanhoEQuantidadeSabor();
    }

    this.excluirProdutosDoFinalDaFilaDeAcordoComQuantidadeSaborSelecionado();
    await this.carregarProdutosHorizontal();
    this.processarProdutosHorizontal();
    await this.agregarItensPassoDosProdutos(TipoPasso.ADICIONAL);
    this.atualizarPrecosProdutosDeAcordoComPrecoDosProdutosHorizontal();
    this.atualizarValoresDoItemPedido();
  }

  async onExecutarQuandoUltimoItem(item) {
    this.itemPedido.limparProdutos();
    this.itemPedido.incluirProduto(item);
    await this.obterPassosESelecionarDeAcordoComPassosAnterior(item.id);
    await this.obterPassoTamanhoESelecionarDeAcordoComTipoTamanhoEQuantidadeSabor();
  }

  async onSelecionarProdutoHorizontal(item) {
    item.selecionado ? this.itemPedido.incluirProduto(item) : this.itemPedido.removerProduto(item);
    await this.agregarItensPassoDosProdutos(TipoPasso.ADICIONAL);
    this.atualizarValoresDoItemPedido();
  }

  onChangeDeQuemE(deQuemE) {
    this.itemPedido.deQuemE = deQuemE.value;
  };

  onChangeObservacao(observacao) {
    this.itemPedido.observacao = observacao.value;
  };

  onChangeQuantidade(quantidade) {
    this.itemPedido.quantidade = quantidade.value;
    this.atualizarValoresDoItemPedido();
  };

  onConfirmarItemPedido() {
    console.log('itemPedido', this.itemPedido);
    this._storageService.addItem(this.itemPedido).then((pedido) => {
      this._animationStateService.panelPedidos.mostrar = true;
      if (pedido.length > 0) {
        this._animationStateService.botaoEnviarPedido.mostrar = true;
      }
    });
  }

}
