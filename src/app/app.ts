import { Component } from '@angular/core';
import { NgModule }      from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { PagesModule } from './pages/pages-module';
import { ServicesModule } from './Services/services-module';

@NgModule({
  imports: [
    PagesModule,
    ServicesModule
  ],
  declarations: [
    MyApp,
  ],
  providers: [
    // appRoutingProviders,
    // HttpService
  ],
  bootstrap:    [ MyApp ]
})
@Component({
    selector: 'app-root',
    template: `
                <root></root>
              `
})
export class MyApp {
  constructor() {
  }
}

Array.prototype['replace'] = function (arr: any[]) {
  if (arr && Array.isArray(arr)) {
    this.splice(0, this.length);
    arr.forEach(item => {
      this.push(item);
    });
  }
};
