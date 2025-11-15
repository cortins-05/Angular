import { Routes } from "@angular/router";
import { RegistrerPage } from "./pages/registrer-page/registrer-page";

export const authRoutes:Routes = [
  {
    path:'',
    children:[
      {
        path:'sign-up',component:RegistrerPage
      },
      {
        path:'**',
        redirectTo:'sign-up'
      }
    ]
  }
]

export default authRoutes;
