import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewaulaformComponent } from './newaulaform.component';

describe('NewaulaformComponent', () => {
  let component: NewaulaformComponent;
  let fixture: ComponentFixture<NewaulaformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewaulaformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewaulaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
