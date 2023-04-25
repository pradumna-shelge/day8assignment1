import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssd2agg6Component } from './cssd2agg6.component';

describe('Cssd2agg6Component', () => {
  let component: Cssd2agg6Component;
  let fixture: ComponentFixture<Cssd2agg6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssd2agg6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cssd2agg6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
