import {NgModule} from '@angular/core';
import {RootCausesComponent} from './root-causes/root-causes.component';
import {AddNewRootCauseComponent} from './add-new-root-cause/add-new-root-cause.component';
import {CdkTableModule} from '@angular/cdk/table';
import {MatTableModule} from '@angular/material/table';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    RootCausesComponent,
    AddNewRootCauseComponent
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
    RootCausesComponent
  ]
})
export class SsRootCauseModule {
}
