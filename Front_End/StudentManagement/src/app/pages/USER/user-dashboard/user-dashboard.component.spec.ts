import { ComponentFixture, TestBed } from '@angular/core/testing';

import { USERDASHBOARDComponent } from './user-dashboard.component';

describe('USERDASHBOARDComponent', () => {
  let component: USERDASHBOARDComponent;
  let fixture: ComponentFixture<USERDASHBOARDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ USERDASHBOARDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(USERDASHBOARDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
