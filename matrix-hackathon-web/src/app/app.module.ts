import { AgentService } from './services/agentService';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ModalFormComponent } from './component/modal-form/modal-form.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';


import {AgmCoreModule} from '@agm/core';
import { TelaInicialComponent } from './component/tela-inicial/tela-inicial.component';
import { LocationService } from './services/locationService';
import { HttpClientModule } from '@angular/common/http';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import {ToastaModule} from 'ngx-toasta';



const routes: Routes = [

  {path: '', component: TelaInicialComponent},
  {path: 'home', component: HomeComponent}
    
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalFormComponent,
    TelaInicialComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes
    ),
    AgmCoreModule.forRoot({
      apiKey: 'YOUR API KEY HERE'
    }),
    HttpClientModule,
    FormsModule,
    AgmSnazzyInfoWindowModule,
    ToastaModule.forRoot()

  ],
  providers: [LocationService, AgentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
