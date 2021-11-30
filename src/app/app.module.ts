import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {UsersComponent} from './containers/users.component';
import {DashboardComponent} from './components/layout/dashboard.component';
import {HeaderComponent} from './components/layout/header.component';
import {HttpService} from './services/http.service';
import {ApiService} from './services/api.service';
import {StoreModule} from '@ngrx/store';
import {rootReducer} from './reducers';
import {UserRepository} from './services/user-repository';
import {ErrorComponent} from './components/error.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
   
    DashboardComponent,
    HeaderComponent,
  
    ErrorComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FlexModule,
    HttpClientModule,
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
    
  ],
  providers: [HttpService, ApiService, UserRepository],
  bootstrap: [AppComponent]
})
export class AppModule {
}
