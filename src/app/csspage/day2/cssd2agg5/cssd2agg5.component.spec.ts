import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssd2agg5Component } from './cssd2agg5.component';

describe('Cssd2agg5Component', () => {
  let component: Cssd2agg5Component;
  let fixture: ComponentFixture<Cssd2agg5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssd2agg5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cssd2agg5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
