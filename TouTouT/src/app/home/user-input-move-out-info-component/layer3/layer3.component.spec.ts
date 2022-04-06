import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Layer3Component } from './layer3.component';

describe('Layer3Component', () => {
  let component: Layer3Component;
  let fixture: ComponentFixture<Layer3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Layer3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Layer3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
