import {Component, OnInit} from '@angular/core';
import {ModulesModel} from '../modules.model';
import {SsModulesService} from '../ss-modules.service';
import {MatDialog} from '@angular/material/dialog';
import {AddModuleComponent} from '../add-module/add-module.component';

@Component({
  selector: 'ss-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {

  loadedModules: ModulesModel[];
  displayedColumns: string[] = ['code', 'name'];

  constructor(private ssModulesService: SsModulesService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.reloadModulesList();
  }

  reloadModulesList() {
    let subscription = this.ssModulesService.loadModules().subscribe(result => {
      if (result) {
        subscription.unsubscribe();
        this.loadedModules = result;
      }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddModuleComponent, {
      width: '300px'
    });
  }

}
