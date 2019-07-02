import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoMultiplosPizzaComponent } from './cartao-multiplos-pizza.component';

describe('CartaoMultiplosPizzaComponent', () => {
  let component: CartaoMultiplosPizzaComponent;
  let fixture: ComponentFixture<CartaoMultiplosPizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaoMultiplosPizzaComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaoMultiplosPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
