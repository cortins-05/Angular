import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.html',
})
export class CharacterAdd {
  name = signal('Gohan');
  power:any = signal(100);

  characters = signal<Character[]>([
      {id:1,name:'Goku',power:9001},
      {id:2,name:'Vegetta',power:8000},
  ]);

  newCharacter = output<Character>();

  addCharacter(){
    if(!this.name()||!this.power()||this.power<=0){
      return;
    }
    const newCharacter:Character = {
      id:Math.floor(Math.random()*1000),
      name: this.name(),
      power:this.power()
    }
    this.characters.update(
      (list)=>[...list,newCharacter]
    );
    this.newCharacter.emit(newCharacter);
    this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }
}
