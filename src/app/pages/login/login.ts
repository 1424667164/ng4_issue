import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    // selector: 'login-page',
    templateUrl: './login.html'
})

export class LoginPage {
    @Output() public loginClick = new EventEmitter();
    user_login = {
        name: 'mjl',
        password: '04140906',
        number: '20161231'
    };
    constructor() {

    }
    doLogin() {
    }
}
