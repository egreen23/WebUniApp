import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecompformComponent } from './updatecompform.component';

describe('UpdatecompformComponent', () => {
  let component: UpdatecompformComponent;
  let fixture: ComponentFixture<UpdatecompformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatecompformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecompformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
