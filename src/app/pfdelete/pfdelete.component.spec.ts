import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfdeleteComponent } from './pfdelete.component';

describe('PfdeleteComponent', () => {
  let component: PfdeleteComponent;
  let fixture: ComponentFixture<PfdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfdeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PfdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
