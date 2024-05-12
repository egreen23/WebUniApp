import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AulaCenterComponent } from './aula-center.component';

describe('AulaCenterComponent', () => {
  let component: AulaCenterComponent;
  let fixture: ComponentFixture<AulaCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AulaCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AulaCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
