import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MainAppComponent } from './main-app/main-app.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {SsProductsModule} from '../../../projects/ss-products/src/lib/ss-products.module';



@NgModule({
  declarations: [
    MainAppComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
    MatToolbarModule,
    SsProductsModule
  ]
})
export class MainAppModule { }
