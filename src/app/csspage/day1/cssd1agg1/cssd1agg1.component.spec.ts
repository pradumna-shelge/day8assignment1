import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssd1agg1Component } from './cssd1agg1.component';

describe('Cssd1agg1Component', () => {
  let component: Cssd1agg1Component;
  let fixture: ComponentFixture<Cssd1agg1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssd1agg1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cssd1agg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
