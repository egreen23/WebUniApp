import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegnalazioneListComponent } from './segnalazione-list.component';

describe('SegnalazioneListComponent', () => {
  let component: SegnalazioneListComponent;
  let fixture: ComponentFixture<SegnalazioneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegnalazioneListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegnalazioneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
