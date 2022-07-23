import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSkiilsComponent } from './user-skiils.component';

describe('UserSkiilsComponent', () => {
  let component: UserSkiilsComponent;
  let fixture: ComponentFixture<UserSkiilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSkiilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSkiilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
