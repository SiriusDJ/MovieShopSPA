import { Component } from '@angular/core';

// Decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movieshopspa';
}

// main.ts => appModule => AppComponent => View
// HomePagedView => app-root