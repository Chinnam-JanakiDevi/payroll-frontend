import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PftableComponent } from './pftable.component';

describe('PftableComponent', () => {
  let component: PftableComponent;
  let fixture: ComponentFixture<PftableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PftableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PftableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
