import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatdidatticoListComponent } from './matdidattico-list.component';

describe('MatdidatticoListComponent', () => {
  let component: MatdidatticoListComponent;
  let fixture: ComponentFixture<MatdidatticoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatdidatticoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatdidatticoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
