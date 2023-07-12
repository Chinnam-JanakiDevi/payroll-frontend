import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfupdateComponent } from './pfupdate.component';

describe('PfupdateComponent', () => {
  let component: PfupdateComponent;
  let fixture: ComponentFixture<PfupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PfupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
