import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './components/layout/dashboard.component';
import {UsersComponent} from './containers/users.component';

const routes: Routes = [
  {
  path: '', component: DashboardComponent,

},
{path: 'user', component: UsersComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
