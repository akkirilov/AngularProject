import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueScreenComponent } from './blue-screen.component';

describe('BlueScreenComponent', () => {
  let component: BlueScreenComponent;
  let fixture: ComponentFixture<BlueScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
