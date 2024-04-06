import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { DhasboardComponent } from './dhasboard/dhasboard.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProfileChildComponent } from './profile-child/profile-child.component';
import { ProfileGrandChildComponent } from './profile-grand-child/profile-grand-child.component';


@NgModule({
  declarations: [
    ProfileComponent,
    DhasboardComponent,
    ProfileChildComponent,
    ProfileGrandChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
