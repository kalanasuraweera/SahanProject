import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'ss-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.css']
})
export class AddModuleComponent implements OnInit {

  moduleCode = new FormControl('', Validators.required);
  moduleName = new FormControl('', Validators.required);

  constructor(public dialogRef: MatDialogRef<AddModuleComponent>) {
  }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

  submit(): void {
    if (this.moduleCode.valid && this.moduleName.valid) {
      console.log('Module code = ' + this.moduleCode.value);
      console.log('Module name - ' + this.moduleName.value);
    }
  }

}
