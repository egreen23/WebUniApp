import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcorsoformComponent } from './newcorsoform.component';

describe('NewcorsoformComponent', () => {
  let component: NewcorsoformComponent;
  let fixture: ComponentFixture<NewcorsoformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcorsoformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcorsoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
