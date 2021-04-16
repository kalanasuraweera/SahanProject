import {Component, OnInit} from '@angular/core';
import {MainAppService} from '../main-app.service';
import {Observable} from 'rxjs';
import {MODULE_TYPE} from '../main-app-models';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.css']
})
export class MainAppComponent implements OnInit {
  readonly MODULE_TYPE = MODULE_TYPE;
  isOpen: boolean = false;
  selectedModule: Observable<MODULE_TYPE>

  constructor(private mainAppService: MainAppService) {
    this.selectedModule = mainAppService.$selectedModule;
  }

  ngOnInit(): void {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  handleModuleTypeSelection(moduleType: MODULE_TYPE) {
    this.mainAppService.updateSelectedModule(moduleType);
  }
}
