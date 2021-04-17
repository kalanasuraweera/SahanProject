import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'ss-add-new-team',
  templateUrl: './add-new-team.component.html',
  styleUrls: ['./add-new-team.component.css']
})
export class AddNewTeamComponent implements OnInit {

  teamCode = new FormControl('', Validators.required);
  teamName = new FormControl('', Validators.required);

  constructor(public dialogRef: MatDialogRef<AddNewTeamComponent>) {
  }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

  submit(): void {
    if (this.teamCode.valid && this.teamName.valid) {
      console.log('Team code = ' + this.teamCode.value);
      console.log('Team name - ' + this.teamName.value);
    }
  }

}
