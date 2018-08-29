import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHotelsComponent } from './home-hotels.component';

describe('HotelsComponent', () => {
  let component: HomeHotelsComponent;
  let fixture: ComponentFixture<HomeHotelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeHotelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
