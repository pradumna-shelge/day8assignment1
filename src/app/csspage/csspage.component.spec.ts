import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSSpageComponent } from './csspage.component';

describe('CSSpageComponent', () => {
  let component: CSSpageComponent;
  let fixture: ComponentFixture<CSSpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSSpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSSpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
