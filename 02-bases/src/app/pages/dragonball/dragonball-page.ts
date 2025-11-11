import { NgClass } from "@angular/common";
import { Component, computed, signal } from "@angular/core";
import { combineLatest } from "rxjs";

interface Character{
  id:number;
  name:string;
  power:number;
}

@Component({
    selector: 'app-dragonball',
    templateUrl: './dragonball-page.html',
    styleUrl: './dragonball-page.html',
    imports:[
      //NgClass
    ]
})
export class DragonBall{

  txtName:any;
  txtPower:any;
  name = signal('');
  power:any = signal(0);

  characters = signal<Character[]>([
    {id:1,name:'Goku',power:9001},
  ]);

  powerClasses = computed(()=>{
    return{
      'text-danger': true
    }
  })

  addCharacter(){
    if(!this.name()||!this.power()||this.power<=0){
      return;
    }
    const newCharacter:Character = {
      id:this.characters.length+1,
      name: this.name(),
      power:this.power()
    }
    this.characters.update(
      (list)=>[...list,newCharacter]
    );
    this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }

}
