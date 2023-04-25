import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssd2agg2Component } from './cssd2agg2.component';

describe('Cssd2agg2Component', () => {
  let component: Cssd2agg2Component;
  let fixture: ComponentFixture<Cssd2agg2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssd2agg2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cssd2agg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
