import { Injectable, signal } from '@angular/core';

export type avaliableLocal = 'es'|'en'|'fr';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  private currentLocale = signal<avaliableLocal>('es');

  constructor(){
    this.currentLocale.set(
      (localStorage.getItem("locale") as avaliableLocal) ?? 'es'
    )
  }

  get getLocale(){
    return this.currentLocale();
  }

  changeLocal(locale: avaliableLocal){
    localStorage.setItem("locale",locale);
    this.currentLocale.set(locale);
    window.location.reload()
  }

}
