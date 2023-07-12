import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HraupdateComponent } from './hraupdate.component';

describe('HraupdateComponent', () => {
  let component: HraupdateComponent;
  let fixture: ComponentFixture<HraupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HraupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HraupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
