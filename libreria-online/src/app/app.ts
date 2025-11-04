import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // solo se usi routing
import { HomepageComponent } from './homepage/homepage';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomepageComponent], // necessario se usi <router-outlet>
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {}
