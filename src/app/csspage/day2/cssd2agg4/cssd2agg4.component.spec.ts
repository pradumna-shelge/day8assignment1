import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssd2agg4Component } from './cssd2agg4.component';

describe('Cssd2agg4Component', () => {
  let component: Cssd2agg4Component;
  let fixture: ComponentFixture<Cssd2agg4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssd2agg4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cssd2agg4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
