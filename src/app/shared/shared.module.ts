import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ButtonComponent } from './button/button.component';
import { CommonService } from './common.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ModalComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    CommonService
  ],
  exports:[
    ButtonComponent
  ]
})
export class SharedModule { }
