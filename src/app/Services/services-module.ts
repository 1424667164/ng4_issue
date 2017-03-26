import { NgModule }      from '@angular/core';
import { HttpModule } from '@angular/http';

import { HttpService } from './http';

@NgModule({
  imports: [
    HttpModule
  ],
  exports: [
  ],
  declarations: [
  ],
  providers: [
    HttpService
  ]
})

export class ServicesModule {

}
