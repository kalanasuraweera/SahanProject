import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MainAppComponent } from './main-app/main-app.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {SsProductsModule} from '../../../projects/ss-products/src/lib/ss-products.module';
import {SsTeamsModule} from '../../../projects/ss-teams/src/lib/ss-teams.module';
import {SsRootCauseModule} from '../../../projects/ss-root-cause/src/lib/ss-root-cause.module';
import {SsTeamMembersModule} from '../../../projects/ss-team-members/src/lib/ss-team-members.module';
import {SsModulesModule} from '../../../projects/ss-modules/src/lib/ss-modules.module';



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
    SsProductsModule,
    SsTeamsModule,
    SsRootCauseModule,
    SsTeamMembersModule,
    SsModulesModule
  ]
})
export class MainAppModule { }
