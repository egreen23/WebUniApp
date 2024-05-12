import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtoolfromComponent } from './newtoolfrom.component';

describe('NewtoolfromComponent', () => {
  let component: NewtoolfromComponent;
  let fixture: ComponentFixture<NewtoolfromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewtoolfromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtoolfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
