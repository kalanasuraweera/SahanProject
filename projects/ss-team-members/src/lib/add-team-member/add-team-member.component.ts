import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {CurrencyPipe, formatNumber} from '@angular/common';

@Component({
  selector: 'ss-add-team-member',
  templateUrl: './add-team-member.component.html',
  styleUrls: ['./add-team-member.component.css']
})
export class AddTeamMemberComponent implements OnInit {

  currencyRegex = /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/;
  memberName = new FormControl('', Validators.required);
  epf = new FormControl('', [Validators.required, Validators.min(0.00), Validators.pattern(this.currencyRegex)]);

  constructor(public dialogRef: MatDialogRef<AddTeamMemberComponent>) {
  }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

  submit(): void {
    if (this.memberName.valid && this.epf.valid) {
      console.log('Member name = ' + this.memberName.value);
      console.log('Member name type = ' + typeof this.memberName.value);
      console.log('EPF - ' + this.epf.value);
      console.log('EPF type - ' + typeof this.epf.value);
    }
  }

  transform() {
    if (this.epf.valid) {
      this.epf.setValue(formatNumber(parseFloat(this.epf.value), 'en-US', '1.2-2' ));
    }
  }
}
