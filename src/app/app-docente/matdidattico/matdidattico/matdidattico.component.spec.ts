import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatdidatticoComponent } from './matdidattico.component';

describe('MatdidatticoComponent', () => {
  let component: MatdidatticoComponent;
  let fixture: ComponentFixture<MatdidatticoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatdidatticoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatdidatticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
