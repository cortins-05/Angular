import { UpperCasePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, signal, Signal } from "@angular/core";

@Component({
  templateUrl: './hero-page.html',
  styleUrl: './hero-page.css',
  imports: [UpperCasePipe]
})
export class HeroPageComponent{
  name = signal('IronMan');
  age = signal(45);

  uppercase = UpperCasePipe;

  computed() {
    const description = `${this.name} - ${this.age}`;
    return description;
  };

  getHeroDescription() {
    return this.computed();
  }

  resetForm() {
    this.name.update((nombre)=>'Ironman');
    this.age.update((current)=>45);
  }

  changeAge() {
    this.age.update((current)=>60);
  }

  changeHero() {
    this.name.update((nombre)=>'Hulk');
  }
}
