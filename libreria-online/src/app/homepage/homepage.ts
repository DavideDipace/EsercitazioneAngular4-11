import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

//@Component({
 // selector: 'app-homepage',
  //standalone: true,          // stand-alone
  //imports: [CommonModule, FormsModule, RouterModule],
  //templateUrl: './homepage.component.html',
  //styleUrls: ['./homepage.component.css']
//})

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `<h1>Benvenuti nella Libreria Online</h1>`
})

export class HomepageComponent { }
