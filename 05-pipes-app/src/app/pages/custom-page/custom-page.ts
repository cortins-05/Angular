import { Component, signal } from '@angular/core';
import { toggleCase } from '../../pipes/togle-case.pipe';
import { heroes } from '../../data/heros.data';
import { CanFlyPipe } from '../../pipes/canFly.pipe';
import { ColorPipe } from '../../pipes/color.pipe';
import { HeroTextPipe } from '../../pipes/herto-text.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    toggleCase,
    CanFlyPipe,
    ColorPipe,
    HeroTextPipe,
    TitleCasePipe,
    HeroCreatorPipe,
    HeroSortByPipe,
    HeroFilterPipe
  ],
  templateUrl: './custom-page.html',
})
export default class CustomPage {
  name=signal("Lucas Ortins");

  upperCase = signal(true);

  heroes = signal(heroes);

  sortBy = signal<keyof Hero | null>(null);

  searchQuery = signal("");
}
