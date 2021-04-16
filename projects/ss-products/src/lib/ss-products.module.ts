import { NgModule } from '@angular/core';
import { SsProductsComponent } from './ss-products/ss-products.component';
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    SsProductsComponent,
    AddNewProductComponent
  ],
  imports: [
    CdkTableModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    SsProductsComponent
  ]
})
export class SsProductsModule { }
