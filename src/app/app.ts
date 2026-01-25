import { Component } from '@angular/core';
import { HeaderComponent } from './header/header';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
