import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Galery2Component } from './galery2.component';

describe('Galery2Component', () => {
  let component: Galery2Component;
  let fixture: ComponentFixture<Galery2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Galery2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Galery2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
