import {Component, OnInit} from '@angular/core';
import {RootCause} from '../root-causes.model';
import {SsRootCauseService} from '../ss-root-cause.service';
import {MatDialog} from '@angular/material/dialog';
import {AddNewRootCauseComponent} from '../add-new-root-cause/add-new-root-cause.component';

@Component({
  selector: 'ss-root-causes',
  templateUrl: './root-causes.component.html',
  styleUrls: ['./root-causes.component.css']
})
export class RootCausesComponent implements OnInit {

  loadedRootCauses: RootCause[];
  displayedColumns: string[] = ['code', 'name'];

  constructor(private ssRootCauseService: SsRootCauseService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.reloadRootCauses();
  }

  reloadRootCauses(): void {
    let subscription = this.ssRootCauseService.loadRootCauses().subscribe(result => {
      if (result) {
        subscription.unsubscribe();
        this.loadedRootCauses = result;
      }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddNewRootCauseComponent, {
      width: '300px'
    });
  }

}
