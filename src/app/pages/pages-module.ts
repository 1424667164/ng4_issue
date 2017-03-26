import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataTableModule } from 'primeng/primeng';

// pages
import { RootPage } from './root/root';
import { LoginPage } from './login/login';


// route
import { routing, appRoutingProviders } from '../app.routing';
import { loginRoutingProviders, loginRouting } from './login/login.routing';

// pipe
import { PipeModule } from '../Pipes/pipe-module';
import { DirectiveModule } from '../Directives/directive-module';

@NgModule({
  imports: [
    DirectiveModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,

    PipeModule,
    loginRouting,
    routing
  ],
  exports: [
    RootPage
  ],
  declarations: [
    RootPage,
    LoginPage,
  ],
  providers: [
    loginRoutingProviders,
    appRoutingProviders
  ]
})

export class PagesModule {

}
