import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeersLayoutComponent } from './beers-layout.component';

describe('BeersLayoutComponent', () => {
  let component: BeersLayoutComponent;
  let fixture: ComponentFixture<BeersLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeersLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
