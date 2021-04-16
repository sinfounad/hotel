import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsayoAComponent } from './ensayo-a.component';

describe('EnsayoAComponent', () => {
  let component: EnsayoAComponent;
  let fixture: ComponentFixture<EnsayoAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnsayoAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsayoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
