import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssd2agg1Component } from './cssd2agg1.component';

describe('Cssd2agg1Component', () => {
  let component: Cssd2agg1Component;
  let fixture: ComponentFixture<Cssd2agg1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssd2agg1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cssd2agg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
