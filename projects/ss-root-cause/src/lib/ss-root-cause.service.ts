import {Injectable} from '@angular/core';
import * as loadedRootCauses from './root-causes/mocks/loadRootCauses.json';
import {BehaviorSubject, Observable} from 'rxjs';
import {RootCause} from './root-causes.model';

@Injectable({
  providedIn: 'root'
})
export class SsRootCauseService {

  constructor() {
  }

  loadRootCauses(): Observable<RootCause[]> {
    let subject: BehaviorSubject<RootCause[]> = new BehaviorSubject(null);
    setTimeout(() => {
      subject.next(loadedRootCauses.data);
    }, 1000);
    return subject;
  }
}
