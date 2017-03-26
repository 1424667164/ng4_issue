import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'root',
  templateUrl: './root.html'
})
export class RootPage implements OnInit {
  public static root: RootPage;
  login = false;
  navs: Array<any>;
  hideLeft = false;
  constructor(
    public router: Router,
  ) {
  }
  ngOnInit() {
    RootPage.root = this;
  }

  doLogin() {
    RootPage.root.router.navigate(['/home']);
  }
  doLogout() {
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
  }
}
