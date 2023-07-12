import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HradeleteComponent } from './hradelete.component';

describe('HradeleteComponent', () => {
  let component: HradeleteComponent;
  let fixture: ComponentFixture<HradeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HradeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HradeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
