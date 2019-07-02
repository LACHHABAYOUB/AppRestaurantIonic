import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheProdutosComponent } from './detalheProdutos.component';

describe('DetalheprodutoComponent', () => {
  let component: DetalheProdutosComponent;
  let fixture: ComponentFixture<DetalheProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetalheProdutosComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
