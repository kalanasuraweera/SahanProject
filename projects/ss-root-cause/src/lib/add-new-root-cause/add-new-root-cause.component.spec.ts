import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewRootCauseComponent } from './add-new-root-cause.component';

describe('AddNewRootCauseComponent', () => {
  let component: AddNewRootCauseComponent;
  let fixture: ComponentFixture<AddNewRootCauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewRootCauseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewRootCauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
