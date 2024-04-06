import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileGrandChildComponent } from './profile-grand-child.component';

describe('ProfileGrandChildComponent', () => {
  let component: ProfileGrandChildComponent;
  let fixture: ComponentFixture<ProfileGrandChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileGrandChildComponent]
    });
    fixture = TestBed.createComponent(ProfileGrandChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
