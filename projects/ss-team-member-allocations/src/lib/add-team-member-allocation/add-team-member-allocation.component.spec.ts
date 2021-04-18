import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeamMemberAllocationComponent } from './add-team-member-allocation.component';

describe('AddTeamMemberAllocationComponent', () => {
  let component: AddTeamMemberAllocationComponent;
  let fixture: ComponentFixture<AddTeamMemberAllocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTeamMemberAllocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeamMemberAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
