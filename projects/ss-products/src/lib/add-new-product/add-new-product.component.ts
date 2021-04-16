import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'ss-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {

  productCode = new FormControl('', Validators.required);
  productName = new FormControl('', Validators.required);

  constructor(public dialogRef: MatDialogRef<AddNewProductComponent>) {
  }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

  submit(): void {
    if (this.productCode.valid && this.productName.valid) {
      console.log('product code = ' + this.productCode.value);
      console.log('product name - ' + this.productName.value);
    }
  }
}
