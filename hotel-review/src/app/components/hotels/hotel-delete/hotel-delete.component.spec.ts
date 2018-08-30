import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDeleteComponent } from './hotel-delete.component';

describe('HotelDeleteComponent', () => {
  let component: HotelDeleteComponent;
  let fixture: ComponentFixture<HotelDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
