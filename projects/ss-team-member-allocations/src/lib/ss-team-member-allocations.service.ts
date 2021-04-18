import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {TeamMemberAllocations} from './team-member-allocations.model';
import * as LoadedTeamMemberAllocations from './team-member-allocations/mocks/memberAllocationsSearchMock.json';

@Injectable({
  providedIn: 'root'
})
export class SsTeamMemberAllocationsService {

  constructor() {
  }

  searchTeamMemberAllocations(date: Date, teamCode: string): Observable<TeamMemberAllocations[]> {
    let subject: BehaviorSubject<TeamMemberAllocations[]> = new BehaviorSubject(null);
    setTimeout(() => {
      subject.next(LoadedTeamMemberAllocations.data);
    }, 1000);
    return subject;
  }
}
