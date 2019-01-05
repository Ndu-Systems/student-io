/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardMedComponent } from './card-med.component';

describe('CardMedComponent', () => {
  let component: CardMedComponent;
  let fixture: ComponentFixture<CardMedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardMedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
