import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'basic',
    title:'Pipes Basicos',
    loadComponent: ()=>import("./pages/basic-page/basic-page")
  },
  {
    path:'numbers',
    title:'Pipes numbers',
    loadComponent: ()=>import("./pages/numbers-page/numbers-page")
  },
  {
    path:'uncommon',
    title:'Uncommon Pipes',
    loadComponent: ()=>import("./pages/uncommon-page/uncommon-page")
  },
  {
    path:'custom',
    title:'Custom Pipes',
    loadComponent: ()=>import("./pages/custom-page/custom-page")
  },
  {
    path:"**",
    redirectTo:'basic'
  }
];
