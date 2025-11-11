import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { GifService } from '../../services/gif.service';

interface MenuOption{
  label:string;
  subLabel:string;
  router:string;
  icon:string;
}

@Component({
  selector: 'app-gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './gifs-side-menu-options.html',
})
export class GifsSideMenuOptions {
  gifService = inject(GifService);
  menuOptions:MenuOption[]=[
    {
      icon:'fa-solid fa-chart-line',
      label:'Trending',
      subLabel:'Gifs Populares',
      router: '/dashboard/trending'
    },
    {
      icon:'fa-solid fa-magnifying-glass',
      label:'Buscador',
      subLabel:'Buscar Gifs',
      router: '/dashboard/search'
    },
  ]
}
