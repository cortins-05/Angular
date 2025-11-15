import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-dinamic-page',
  imports: [JsonPipe,ReactiveFormsModule],
  templateUrl: './dinamic-page.html',
})
export class DinamicPage {
  private fb = inject(FormBuilder);
  formUtils = FormUtils;
  myForm = this.fb.group({
    name:['',[Validators.required,Validators.minLength(3)]],
    favoriteGames: this.fb.array(
      [
        ['Metal Gear',Validators.required],
        ['Death Stranding',Validators.required]
      ],
      [Validators.minLength(2)]
    )
  })

  newFavorite = new FormControl('',Validators.required);

  onAddToFavorites(){
    if(this.newFavorite.invalid) return;
    const newGame = this.newFavorite.value;
    this.FavoriteGames.push(this.fb.control(newGame,Validators.required));
    this.newFavorite.reset();
  }

  get FavoriteGames(){
    return this.myForm.get('favoriteGames') as FormArray;
  }

  onDeleteFavorite(index:number){
    this.FavoriteGames.removeAt(index);
  }
  onSubmit(){
    this.myForm.markAllAsTouched();
  }
}
