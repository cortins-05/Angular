import { Component, computed, inject, signal } from "@angular/core";
import { combineLatest } from "rxjs";
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { CharacterAdd } from "../../components/dragonball/character-add/character-add";
import { DragonBallService } from "../../services/dragonball.service";

interface Character{
  id:number;
  name:string;
  power:number;
}

@Component({
    selector: 'dragonball-super',
    templateUrl: './dragonball-super-page.html',
    styleUrl: './dragonball-super-page.html',
    imports: [
    CharacterList,
    CharacterAdd
]
})
export class DragonBallSuper{

  // constructor(
  //   public dragonBallService: DragonBallService
  // )
  // {}
  public dragonBallService = inject(DragonBallService);
  powerClasses = computed(()=>{
    return{
      'text-danger': true
    }
  })


}
