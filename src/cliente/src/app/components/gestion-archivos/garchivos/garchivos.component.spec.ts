import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GArchivosComponent } from './garchivos.component';

describe('GArchivosComponent', () => {
  let component: GArchivosComponent;
  let fixture: ComponentFixture<GArchivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GArchivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GArchivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
