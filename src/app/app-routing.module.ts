import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './components/layout/dashboard.component';
import { ProjectmembershipsComponent } from './components/projectmemberships/projectmemberships.component';
import { UnregisteredusersComponent } from './components/unregisteredusers/unregisteredusers.component';
import {UsersComponent} from './containers/users.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'user', component: UsersComponent},
  {path: 'unregisteredusers', component: UnregisteredusersComponent},
  {path: 'projectmemberships', component: ProjectmembershipsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
