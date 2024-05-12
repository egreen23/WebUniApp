import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegnalazioneDetailComponent } from './segnalazione-detail.component';

describe('SegnalazioneDetailComponent', () => {
  let component: SegnalazioneDetailComponent;
  let fixture: ComponentFixture<SegnalazioneDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegnalazioneDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegnalazioneDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
