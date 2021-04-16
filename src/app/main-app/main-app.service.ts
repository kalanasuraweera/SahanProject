import {Injectable} from '@angular/core';
import {MODULE_TYPE} from './main-app-models';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainAppService {

  constructor() {
  }

  private selectedModule: BehaviorSubject<MODULE_TYPE> = new BehaviorSubject<MODULE_TYPE>(MODULE_TYPE.GENERATE_REPORT);

  $selectedModule = this.selectedModule.asObservable();

  updateSelectedModule(selectedModule: MODULE_TYPE) {
    if (this.selectedModule.value != selectedModule) {
      this.selectedModule.next(selectedModule);
    }
  }
}
