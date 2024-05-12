import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmaterialeformComponent } from './newmaterialeform.component';

describe('NewmaterialeformComponent', () => {
  let component: NewmaterialeformComponent;
  let fixture: ComponentFixture<NewmaterialeformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewmaterialeformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmaterialeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
