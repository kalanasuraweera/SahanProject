import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {SsTeamsService, Team} from 'ss-teams';
import {SsTeamMembersService, TeamMember} from 'ss-team-members';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'ss-add-team-member-allocation',
  templateUrl: './add-team-member-allocation.component.html',
  styleUrls: ['./add-team-member-allocation.component.css']
})
export class AddTeamMemberAllocationComponent implements OnInit {

  membersList: TeamMember[];
  teamsList: Team[];
  selectedTeam: FormControl = new FormControl('', Validators.required);
  selectedDate: FormControl = new FormControl('', Validators.required);
  selectedMember: FormControl = new FormControl('', Validators.required);

  constructor(public dialogRef: MatDialogRef<AddTeamMemberAllocationComponent>,
              private ssTeamMembersService: SsTeamMembersService,
              private ssTeamService: SsTeamsService) {
  }

  ngOnInit(): void {
    let memberListSub = this.ssTeamMembersService.loadTeamMembers().subscribe(result => {
      if (result) {
        memberListSub.unsubscribe();
        this.membersList = result;
      }
    });
    let teamsListSub = this.ssTeamService.loadTeams().subscribe(result => {
      if (result) {
        teamsListSub.unsubscribe();
        this.teamsList = result;
      }
    });
  }

  close(): void {
    this.dialogRef.close();
  }

  submit(): void {
    if (this.selectedMember.valid && this.selectedTeam.valid && this.selectedDate.valid) {
      console.log('Date = ' + this.selectedDate.value);
      console.log('Selected team - ' + this.selectedTeam.value);
      console.log('Selected member - ' + this.selectedMember.value);
    }
  }

}
