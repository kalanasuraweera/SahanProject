import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'ss-add-new-root-cause',
  templateUrl: './add-new-root-cause.component.html',
  styleUrls: ['./add-new-root-cause.component.css']
})
export class AddNewRootCauseComponent implements OnInit {

  rootCauseCode = new FormControl('', Validators.required);
  rootCauseName = new FormControl('', Validators.required);

  constructor(public dialogRef: MatDialogRef<AddNewRootCauseComponent>) {
  }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

  submit(): void {
    if (this.rootCauseCode.valid && this.rootCauseName.valid) {
      console.log('Root cause code = ' + this.rootCauseCode.value);
      console.log('Root cause name - ' + this.rootCauseName.value);
    }
  }

}
