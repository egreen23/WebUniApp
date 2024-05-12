import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsegnalazioneformComponent } from './newsegnalazioneform.component';

describe('NewsegnalazioneformComponent', () => {
  let component: NewsegnalazioneformComponent;
  let fixture: ComponentFixture<NewsegnalazioneformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsegnalazioneformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsegnalazioneformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
