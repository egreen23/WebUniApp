import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcalendarioformComponent } from './newcalendarioform.component';

describe('NewcalendarioformComponent', () => {
  let component: NewcalendarioformComponent;
  let fixture: ComponentFixture<NewcalendarioformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcalendarioformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcalendarioformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
