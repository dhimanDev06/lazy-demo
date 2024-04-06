import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [

  {
    path:'user', loadChildren: ()=> import('./user/user.module').then(m=> m.UserModule)
  },
  {
    path:'shop', loadChildren: ()=> import('./shop/shop.module').then(m=>m.ShopModule)
  },
  {
    path:'**',component:Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
