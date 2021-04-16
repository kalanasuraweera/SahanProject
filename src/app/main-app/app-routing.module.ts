import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainAppComponent} from './main-app/main-app.component';

const routes: Routes = [
  {path: '', component: MainAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
