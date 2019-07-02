import { PedidoStateService } from './../../services/pedido.state.service';
import { StorageService } from 'src/app/services/storage.service';
import { SubGrupoStateService } from './../../services/subgrupo.state.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ClasseStateService } from '../../services/classe.state.service';
import { SubgrupoService } from './../../services/subgrupo.service';
import { ClasseService } from '../../services/classe.service';
import { AnimationStateService } from './../../services/animation.state.service';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { PedidoService } from 'src/app/services/pedido/pedido.service';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  faExclamationTriangle = faExclamationTriangle;
  carregandoListaClasses: boolean = false;
  carregandoListaSubgrupo: boolean = false;
  errorMensagemListaSubGrupo: string = '';
  errorMensagemListaClasses: string = '';
  subgrupos: Object;
  listaProdutos: Object;
  mesa: string = '10';
  estanPedidosEnviados: boolean = false;
  enviandoPedidos: boolean = false;
  bandeira: boolean = false;
  ordem: any;
  pedidosEmdamentoSubscribe;
  pedidosFinalizadosSubscribe;

  constructor(
    private classesService: ClasseService,
    private subgrupoService: SubgrupoService,
    private classeStateService: ClasseStateService,
    private subGrupoStateService: SubGrupoStateService,
    private animationStateService: AnimationStateService,
    private _pedidoStateService: PedidoStateService,
    private _storageService: StorageService,
    private _pedidoService: PedidoService,
    private router: Router,
    private cdRef: ChangeDetectorRef,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.carregarSubgrupos();
    this.verificarPedidosPendentes();
    this._storageService.calcularNumeroItens();
    this._storageService.calcularValorTotalOrdem();
    this.getPedidosEmAndamento();
    this.getPedidosFinalizados();
    this.verificarPedidosEmAndamentos(10000);
    this.verificarPedidosFinalizados(10000);
  }

  async carregarSubgrupos() {
    this.subGrupoStateService.isLoading.subgrupos = true;
    this.classeStateService.isLoading.classes = true;
    try {
      const res = await this.subgrupoService.listar();
      this.errorMensagemListaSubGrupo = '';
      this.subGrupoStateService.lista.subgrupos = res;
      this.subGrupoStateService.isLoading.subgrupos = false;
      this.carregarClasses(res[0].id);
    } catch (error) {
      this.errorMensagemListaSubGrupo = 'Error ao carregar, entre em contato com o administrador por favor.';
      setTimeout(() => this.carregarSubgrupos(), 5000)
    }
  }

  async carregarClasses(subgrupoId: number) {
    this.classeStateService.isLoading.classes = true;
    const regExpr = new RegExp(/home\/produto\/\d/i)
    if (regExpr.test(this.router.url)) {
      this.router.navigate(['/home/produto']);
    }
    try {
      const res = await this.classesService.listar(subgrupoId);
      this.errorMensagemListaClasses = '';
      this.classeStateService.lista.classes = res;
      this.classeStateService.isLoading.classes = false
      this.classeStateService.existemProdutos.classes = res.filter((item) => { return item.produtos.length > 0; }).length > 0;
    } catch (e) {
      this.errorMensagemListaClasses = 'Error ao carregar, entre em contato com o administrador por favor.';
      this.classeStateService.isLoading.classes = false
      setTimeout(() => this.carregarClasses(subgrupoId), 5000);
    }
  }

  selecionarGrupo = (idSubGrupo, gruposList) => {
    this.carregarClasses(idSubGrupo);
  }

  onAdicionarMaisItems = () => {
    this.animationStateService.panelPedidos.mostrar = false;
    this.router.navigate(['/home/produto']);
  }

  onSolicitarConta = () => {
    this.animationStateService.visulizacaoExtrato.mostrar = false;
  }

  onFinalizarPedido = (event) => {
    this.animationStateService.panelPedidos.showBackdrop = true;
    this._pedidoService.guardarPedido(this.mesa, this._pedidoStateService.ordem.valorTotal).then((res) => {
      this._storageService.getHaPedidosEmAmdamento().then((res) => {
        if (!res) {
          this._storageService.setHaPedidosEmAmdamento(true);
          this.pedidosEmdamentoSubscribe.unsubscribe();
          this.verificarPedidosEmAndamentos(10000);
        }
      });
      this.estanPedidosEnviados = true;
    }).catch((error) => {
      console.log('error', error);
      this.estanPedidosEnviados = false;
    });
  }

  onMostrarPainelPedidos = (event) => {
    this.animationStateService.panelPedidos.mostrar = true;
    this.animationStateService.ordemConfirmacao.mostrar = false;
    this._storageService.calcularNumeroItens();
  }

  verificarPedidosPendentes() {
    this._storageService.getItems().then((pedidos) => {
      if (pedidos && pedidos.length > 0) {
        this.animationStateService.botaoEnviarPedido.mostrar = true;
      }
    });
  }

  onFinalizarProgreso = () => {
    if (this.estanPedidosEnviados) {
      this.animationStateService.panelPedidos.mostrar = false;
      this.animationStateService.ordemConfirmacao.mostrar = true;
      this.animationStateService.botaoEnviarPedido.mostrar = false;
      this.animationStateService.panelPedidos.showBackdrop = false;
      this._storageService.clearItems();
      this.cdRef.detectChanges();
    } else {
      this.animationStateService.panelPedidos.showBackdrop = false;
      this.animationStateService.panelPedidos.mostrar = false;
      this.presentAlert();
    }
  }

  onFazerOutroPedido(event) {
    this.animationStateService.ordemConfirmacao.mostrar = false;
    this.router.navigate(['/home/produto']);
  }
  
  iniciar(event) {
    this.animationStateService.slide.mostrar = false;
    this.router.navigate(['/home/produto']);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'A ordem não pôde ser concluído',
      message: 'Mais calma, ou problema será resolvido em breve, por gentileza de contato ao administrador.',
      buttons: ['OK']
    });

    await alert.present();
  }

  onVerAndamentos() {
    //mostra a tela de andamentos
  }

  onVerExtrato() {
    this.animationStateService.visulizacaoExtrato.mostrar = true;
  }

  verificarPedidosEmAndamentos = (tempoInterval: number) => {
    this.pedidosEmdamentoSubscribe = Observable.interval(tempoInterval)
      .subscribe((val) => {
        this._storageService.getHaPedidosEmAmdamento().then((res) => {
          if (res) {
            this.getPedidosEmAndamento();
          } else {
            this.pedidosEmdamentoSubscribe.unsubscribe();
          }
        });
      });
  }

  verificarPedidosFinalizados = (tempoInterval: number) => {
    this.pedidosFinalizadosSubscribe = Observable.interval(tempoInterval)
      .subscribe((val) => {
        this.getPedidosFinalizados();
      });
  }

  getPedidosEmAndamento = () => {
    this._pedidoService.getPedidosEmAndamento(this.mesa).then((result) => {
      const length = result ? Object.keys(result).length : 0;
      this._pedidoStateService.produtosPedido.numero = length;
      if (length) {
        this._storageService.setHaPedidosEmAmdamento(true);
      } else {
        this._storageService.setHaPedidosEmAmdamento(false);
      }
    }).catch((error) => {
      console.log('error', error);
    });
  }

  getPedidosFinalizados = () => {
    this._pedidoService.getPedidosFinalizados(this.mesa).then((pedidos) => {
      const length = pedidos ? Object.keys(pedidos).length : 0;
      this._pedidoStateService.ItensPedidosCompletados.numero = length;
      if (length) {
        const totalExtrato = this.calcularValorTotalPedidosFinalizados(pedidos);
        this._pedidoStateService.totalExtrato.valor = totalExtrato;
      }
    }).catch((error) => {
      console.log('error', error);
    });
  }

  calcularValorTotalPedidosFinalizados = (pedidos) => {
    const total = pedidos.reduce(function (accumulator, pedido) {
      return accumulator + pedido.valorTotal;
    }, 0);

    return total ? total : 0;
  }
}