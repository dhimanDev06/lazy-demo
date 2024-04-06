import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-grand-child',
  templateUrl: './profile-grand-child.component.html',
  styleUrls: ['./profile-grand-child.component.scss']
})
export class ProfileGrandChildComponent {
  @Input() abc:any;
}
