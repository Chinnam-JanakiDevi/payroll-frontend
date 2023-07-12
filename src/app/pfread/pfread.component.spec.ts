import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfreadComponent } from './pfread.component';

describe('PfreadComponent', () => {
  let component: PfreadComponent;
  let fixture: ComponentFixture<PfreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfreadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PfreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
