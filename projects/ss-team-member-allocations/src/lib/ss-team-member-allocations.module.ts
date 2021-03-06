import {NgModule} from '@angular/core';
import { TeamMemberAllocationsComponent } from './team-member-allocations/team-member-allocations.component';
import {SsTeamMembersModule} from 'ss-team-members';
import {CdkTableModule} from '@angular/cdk/table';
import {MatTableModule} from '@angular/material/table';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { AddTeamMemberAllocationComponent } from './add-team-member-allocation/add-team-member-allocation.component';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    TeamMemberAllocationsComponent,
    AddTeamMemberAllocationComponent
  ],
  imports: [
    SsTeamMembersModule,
    CdkTableModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  exports: [
    TeamMemberAllocationsComponent
  ]
})
export class SsTeamMemberAllocationsModule {
}
