import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    a>{ [routerLink]="['/routes']" }
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
    title = 'Tour of Heroes';
}