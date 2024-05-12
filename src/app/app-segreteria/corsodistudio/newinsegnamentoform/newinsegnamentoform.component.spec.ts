import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewinsegnamentoformComponent } from './newinsegnamentoform.component';

describe('NewinsegnamentoformComponent', () => {
  let component: NewinsegnamentoformComponent;
  let fixture: ComponentFixture<NewinsegnamentoformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewinsegnamentoformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewinsegnamentoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
