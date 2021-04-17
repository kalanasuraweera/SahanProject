import {Injectable} from '@angular/core';
import * as loadedTeams from './teams/mocks/loadTeams.json';
import {BehaviorSubject, Observable} from 'rxjs';
import {Team} from './teams/teams.model';

@Injectable({
  providedIn: 'root'
})
export class SsTeamsService {

  constructor() {
  }

  loadTeams(): Observable<Team[]> {
    let subject: BehaviorSubject<Team[]> = new BehaviorSubject(null);
    setTimeout(() => {
      subject.next(loadedTeams.data);
    }, 1000);
    return subject;
  }
}
