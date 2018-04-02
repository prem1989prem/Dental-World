import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmantComponent } from './appointmant.component';

describe('AppointmantComponent', () => {
  let component: AppointmantComponent;
  let fixture: ComponentFixture<AppointmantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
