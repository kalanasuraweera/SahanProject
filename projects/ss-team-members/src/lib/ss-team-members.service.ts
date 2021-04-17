import {Injectable} from '@angular/core';
import * as loadedTeamMembers from './team-members/mocks/loadTeamMembers.json';
import {BehaviorSubject, Observable} from 'rxjs';
import {TeamMember} from './team-members.model';

@Injectable({
  providedIn: 'root'
})
export class SsTeamMembersService {

  constructor() {
  }

  loadTeamMembers(): Observable<TeamMember[]> {
    let subject: BehaviorSubject<TeamMember[]> = new BehaviorSubject(null);
    setTimeout(() => {
      subject.next(loadedTeamMembers.data);
    }, 1000);
    return subject;
  }
}
