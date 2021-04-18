import {Component, OnInit} from '@angular/core';
import {SsTeamMembersService} from 'ss-team-members';
import {SsTeamMemberAllocationsService} from '../ss-team-member-allocations.service';
import {FormControl, Validators} from '@angular/forms';
import {TeamMemberAllocations} from '../team-member-allocations.model';

@Component({
  selector: 'ss-team-member-allocations',
  templateUrl: './team-member-allocations.component.html',
  styleUrls: ['./team-member-allocations.component.css']
})
export class TeamMemberAllocationsComponent implements OnInit {

  date: FormControl = new FormControl('', Validators.required);
  teamCode: FormControl = new FormControl('');
  searchResults: TeamMemberAllocations[];
  displayedColumns: string[] = ['date', 'teamName', 'members'];

  constructor(private ssTeamMemberAllocationService: SsTeamMemberAllocationsService) {
  }

  ngOnInit(): void {
  }

  performSearch() {
    let subscription = this.ssTeamMemberAllocationService.searchTeamMemberAllocations(this.date.value, this.teamCode.value).subscribe(result => {
      if (result) {
        subscription.unsubscribe();
        this.searchResults = result;
      }
    });
  }

  startSearch() {
    if (this.date.valid) {
      this.performSearch();
    }
  }
}
