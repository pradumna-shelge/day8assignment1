import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssd2agg3Component } from './cssd2agg3.component';

describe('Cssd2agg3Component', () => {
  let component: Cssd2agg3Component;
  let fixture: ComponentFixture<Cssd2agg3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssd2agg3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cssd2agg3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
