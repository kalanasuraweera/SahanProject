import {NgModule} from '@angular/core';
import {TeamMembersComponent} from './team-members/team-members.component';
import {AddTeamMemberComponent} from './add-team-member/add-team-member.component';
import {CdkTableModule} from '@angular/cdk/table';
import {MatTableModule} from '@angular/material/table';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    TeamMembersComponent,
    AddTeamMemberComponent
  ],
  imports: [
    CdkTableModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    CommonModule
  ],
  exports: [
    TeamMembersComponent
  ]
})
export class SsTeamMembersModule {
}
