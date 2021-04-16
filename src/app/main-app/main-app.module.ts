import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MainAppComponent } from './main-app/main-app.component';



@NgModule({
  declarations: [
    MainAppComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ]
})
export class MainAppModule { }
