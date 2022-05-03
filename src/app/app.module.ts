import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import {CocheService} from "./coches/coche.service";

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {DirectivaComponent} from './directiva/directiva.component';
import {CochesComponent} from './coches/coches.component';


const routes: Routes = [
  {path: '', redirectTo: '/coches', pathMatch: 'full'},
  {path: 'directivas', component: DirectivaComponent},
  {path: 'coches', component: CochesComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    CochesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CocheService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
