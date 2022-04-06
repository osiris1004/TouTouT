import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInputMoveOutInfoComponentComponent } from './user-input-move-out-info-component.component';

describe('UserInputMoveOutInfoComponentComponent', () => {
  let component: UserInputMoveOutInfoComponentComponent;
  let fixture: ComponentFixture<UserInputMoveOutInfoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInputMoveOutInfoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInputMoveOutInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
