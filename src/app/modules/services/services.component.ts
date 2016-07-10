import { Component } from '@angular/core';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'services',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './services.template.html'
})
export class Services {}
