import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter';
import { HeroPageComponent } from './pages/hero/hero-page';
import { DragonBall } from './pages/dragonball/dragonball-page';

export const routes: Routes = [
  {
    path: '',
    component: CounterComponent
  },
  {
    path: 'hero',
    component: HeroPageComponent
  },
  {
    path: 'dragonball',
    component: DragonBall
  },
  {
    path: '**',
    redirectTo: ''
  }
];
