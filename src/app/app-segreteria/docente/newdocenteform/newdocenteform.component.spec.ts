import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdocenteformComponent } from './newdocenteform.component';

describe('NewdocenteformComponent', () => {
  let component: NewdocenteformComponent;
  let fixture: ComponentFixture<NewdocenteformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewdocenteformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdocenteformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
