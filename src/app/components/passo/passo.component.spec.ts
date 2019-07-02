import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassoComponent } from './passo.component';

describe('PassoComponent', () => {
  let component: PassoComponent;
  let fixture: ComponentFixture<PassoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassoComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
