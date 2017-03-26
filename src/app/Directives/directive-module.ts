import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { PipeModule } from '../Pipes/pipe-module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        PipeModule
    ],
    exports: [
    ],
    declarations: [
    ],
    providers: [
    ]
})

export class DirectiveModule {

}
