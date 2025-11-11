import { effect, Injectable,signal } from "@angular/core";
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = ():Character[]=>{
  const characters = localStorage.getItem('characters');
  if(characters){
    const localStorageObj = JSON.parse(characters);
    return localStorageObj;
  }
  return [
    {
      id:1,
      name: "Goku",
      power:100
    }
  ]
}

@Injectable({providedIn:'root'})
export class DragonBallService{

  characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(()=>{
    localStorage.setItem('characters',JSON.stringify(this.characters()));
  })
  
  addCharacter(character:Character){
    this.characters.update(
      list => [...list,character]
    )
  }
}
