import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { DhasboardComponent } from './dhasboard/dhasboard.component';

const routes: Routes = [
  {path:'',component:ProfileComponent},
  {
    path:'dashboard', component: DhasboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
