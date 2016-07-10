/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.styles.scss'
  ],
  template: `
    <nav class="navbar navbar-light">
      <div class="container">
        <a class="nav-link" [routerLink]="['./home']">
          <img [src]="angularclassLogo" style="max-width: 400px;">
        </a>
        <ul class="nav navbar-nav">
          <li [routerLinkActive]="['active']" class="nav-item">
            <a class="nav-link" [routerLink]="['./home']">
              About us
            </a>
          </li>
          <li [routerLinkActive]="['active']" class="nav-item">
            <a class="nav-link" [routerLink]="['./services']">
              Services
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              People
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>
    <footer>
      <div class="container">
        
      </div>
    </footer>
  `
})
export class App {
  angularclassLogo = 'assets/img/swga_logo.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
