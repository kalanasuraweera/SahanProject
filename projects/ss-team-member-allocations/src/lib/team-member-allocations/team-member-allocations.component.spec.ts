import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemberAllocationsComponent } from './team-member-allocations.component';

describe('TeamMemberAllocationsComponent', () => {
  let component: TeamMemberAllocationsComponent;
  let fixture: ComponentFixture<TeamMemberAllocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamMemberAllocationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMemberAllocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
