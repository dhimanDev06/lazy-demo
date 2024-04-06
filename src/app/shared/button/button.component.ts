import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  constructor(
    private commService: CommonService, // DI
  ) { 
  }
  dataGet:any;
  ngOnInit(): void {
    console.log("stringSubject ",this.commService.stringSubject);
    this.commService.stringSubject.subscribe(res=>{
      this.dataGet = res;
      console.log("button ",res)
    })
  }
}
