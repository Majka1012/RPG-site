import { Component } from '@angular/core';
import { HeaderComponent } from './header/header';
import { PageComponent } from './character-sheet-page/page';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, PageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
