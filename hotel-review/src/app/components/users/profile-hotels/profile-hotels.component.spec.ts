import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHotelsComponent } from './profile-hotels.component';

describe('ProfileHotelsComponent', () => {
  let component: ProfileHotelsComponent;
  let fixture: ComponentFixture<ProfileHotelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileHotelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
