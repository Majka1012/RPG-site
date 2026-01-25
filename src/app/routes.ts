import { Routes } from '@angular/router';
import { CharPageComponent } from './character-sheet-page/page';
import { CalcPageComponent } from './calculator-page/page';
import { About } from './about-page/about';
import { HomeComponent } from './home-page/home/home';
const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'RPG Home Page',
  },
  {
    path: 'Char',
    component: CharPageComponent,
    title: 'RPG Home Page',
  },
  {
    path: 'Calc',
    component: CalcPageComponent,
    title: 'RPG Calc Page',
  },
  {
    path: 'About',
    component: About,
    title: 'RPG About Page',
  },
];

export default routeConfig;
