import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-profile-child',
  templateUrl: './profile-child.component.html',
  styleUrls: ['./profile-child.component.scss']
})
export class ProfileChildComponent {

  @Input() abc:any;
  @Output() newItemEvent = new EventEmitter<string>();
  // outputValue:any;

  backtochild(){
    this.newItemEvent.emit("Dhiman");
  }
}
