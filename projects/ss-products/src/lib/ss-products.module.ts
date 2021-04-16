import { NgModule } from '@angular/core';
import { SsProductsComponent } from './ss-products/ss-products.component';
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';



@NgModule({
  declarations: [
    SsProductsComponent
  ],
  imports: [
    CdkTableModule,
    MatTableModule
  ],
  exports: [
    SsProductsComponent
  ]
})
export class SsProductsModule { }
