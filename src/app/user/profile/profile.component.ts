import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-profile-parent',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  parent:any;
  passData:any = '';
  outPutValue:any;
  constructor(
    private commService: CommonService, // DI
  ) { 

  }

  passValue(){
    this.passData = this.parent;
    localStorage.setItem('userModuleData',this.passData);
  }


  valueFromChild($event:any){
    console.log($event)
    this.outPutValue = $event
  }
  ngOnInit(): void {
    this.commService.stringSubject.subscribe(res=>{
      console.log(res)
    })
  }
}
