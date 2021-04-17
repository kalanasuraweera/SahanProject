import {NgModule} from '@angular/core';
import {ModulesComponent} from './modules/modules.component';
import {AddModuleComponent} from './add-module/add-module.component';
import {CdkTableModule} from '@angular/cdk/table';
import {MatTableModule} from '@angular/material/table';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ModulesComponent,
    AddModuleComponent
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
    ModulesComponent
  ]
})
export class SsModulesModule {
}
