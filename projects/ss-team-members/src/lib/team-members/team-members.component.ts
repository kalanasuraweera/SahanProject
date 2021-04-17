import {Component, OnInit} from '@angular/core';
import {TeamMember} from '../team-members.model';
import {SsTeamMembersService} from '../ss-team-members.service';
import {MatDialog} from '@angular/material/dialog';
import {AddTeamMemberComponent} from '../add-team-member/add-team-member.component';

@Component({
  selector: 'ss-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.css']
})
export class TeamMembersComponent implements OnInit {

  loadedTeamMembers: TeamMember[];
  displayedColumns: string[] = ['memberName', 'EPF'];

  constructor(private ssTeamMemberService: SsTeamMembersService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.reloadTeamMembers();
  }

  reloadTeamMembers() {
    let subscription = this.ssTeamMemberService.loadTeamMembers().subscribe(result => {
      if (result) {
        subscription.unsubscribe();
        this.loadedTeamMembers = result;
      }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddTeamMemberComponent, {
      width: '300px'
    });
  }

}
