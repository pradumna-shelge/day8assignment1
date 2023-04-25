import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssd1agg2Component } from './cssd1agg2.component';

describe('Cssd1agg2Component', () => {
  let component: Cssd1agg2Component;
  let fixture: ComponentFixture<Cssd1agg2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssd1agg2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cssd1agg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
