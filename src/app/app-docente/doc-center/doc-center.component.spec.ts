import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocCenterComponent } from './doc-center.component';

describe('DocCenterComponent', () => {
  let component: DocCenterComponent;
  let fixture: ComponentFixture<DocCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
