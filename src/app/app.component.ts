import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Películas', url: '/movies', icon: 'film' },
    { title: 'Actores', url: '/actors', icon: 'people' },
    { title: 'Estudios', url: '/companies', icon: 'videocam' },
  ];

  constructor() {}
}
