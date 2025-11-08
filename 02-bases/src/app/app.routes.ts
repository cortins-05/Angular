import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter';
import { HeroPageComponent } from './pages/hero/hero-page';

export const routes: Routes = [
  {
    path: '',
    component: CounterComponent
  },
  {
    path: 'hero',
    component: HeroPageComponent
  }
];
