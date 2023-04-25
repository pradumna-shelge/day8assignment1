import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTMLPageComponent } from './htmlpage.component';

describe('HTMLPageComponent', () => {
  let component: HTMLPageComponent;
  let fixture: ComponentFixture<HTMLPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HTMLPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HTMLPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
