import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ModulesModel} from './modules.model';
import * as loadedModules from './modules/mocks/loadModules.json';

@Injectable({
  providedIn: 'root'
})
export class SsModulesService {

  constructor() {
  }

  loadModules(): Observable<ModulesModel[]> {
    let subject: BehaviorSubject<ModulesModel[]> = new BehaviorSubject(null);
    setTimeout(() => {
      subject.next(loadedModules.data);
    }, 1000);
    return subject;
  }
}
