import {NgModule} from '@angular/core';
import {TeamsComponent} from './teams/teams.component';
import {AddNewTeamComponent} from './add-new-team/add-new-team.component';
import {CdkTableModule} from '@angular/cdk/table';
import {MatTableModule} from '@angular/material/table';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    TeamsComponent,
    AddNewTeamComponent
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
    TeamsComponent
  ]
})
export class SsTeamsModule {
}
