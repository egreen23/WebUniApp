import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsegnamentoDetailComponent } from './insegnamento-detail.component';

describe('InsegnamentoDetailComponent', () => {
  let component: InsegnamentoDetailComponent;
  let fixture: ComponentFixture<InsegnamentoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsegnamentoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsegnamentoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
