import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlezioneformComponent } from './newlezioneform.component';

describe('NewlezioneformComponent', () => {
  let component: NewlezioneformComponent;
  let fixture: ComponentFixture<NewlezioneformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewlezioneformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewlezioneformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
