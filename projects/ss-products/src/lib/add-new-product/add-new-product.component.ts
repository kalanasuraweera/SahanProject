import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'ss-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddNewProductComponent>) {
  }

  productCode = new FormControl('');
  productName = new FormControl('');

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

  submit(): void {
    console.log('product code = ' + this.productCode.value);
    console.log('product name - ' + this.productName.value);
  }
}
