import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsegnamentoListComponent } from './insegnamento-list.component';

describe('InsegnamentoListComponent', () => {
  let component: InsegnamentoListComponent;
  let fixture: ComponentFixture<InsegnamentoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsegnamentoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsegnamentoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
