import {IonicGestureConfig} from 'ionic-angular';
import {ClasseService} from './services/classe.service';
import {NgModule} from '@angular/core';
import {BrowserModule, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {ClasseStateService} from './services/classe.state.service';
import {SubGrupoStateService} from './services/subgrupo.state.service';
import {Network} from '@ionic-native/network/ngx';
import {Toast} from '@ionic-native/toast/ngx';
import {IonicStorageModule} from '@ionic/storage';
import {TamanhoService} from './services/produto/tamanho.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],

  imports: [BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    Network,
    Toast,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    ClasseService,
    ClasseStateService,
    SubGrupoStateService,
    TamanhoService,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: IonicGestureConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
