import { Component, OnInit } from '@angular/core';
import {SsTeamsService} from '../ss-teams.service';
import {MatDialog} from '@angular/material/dialog';
import {Team} from './teams.model';
import {AddNewTeamComponent} from '../add-new-team/add-new-team.component';

@Component({
  selector: 'ss-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  loadedTeams: Team[];
  displayedColumns: string[] = ['code', 'name'];

  constructor(private ssTeamsService: SsTeamsService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.reloadTeamList();
  }

  reloadTeamList() {
    let subscription = this.ssTeamsService.loadTeams().subscribe(result => {
      if (result) {
        subscription.unsubscribe();
        this.loadedTeams = result;
      }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddNewTeamComponent, {
      width: '300px'
    });
  }
}
