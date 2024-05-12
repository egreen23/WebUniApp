import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavSegComponent } from './side-nav-seg.component';

describe('SideNavSegComponent', () => {
  let component: SideNavSegComponent;
  let fixture: ComponentFixture<SideNavSegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavSegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavSegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
