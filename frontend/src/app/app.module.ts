import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AuthguardGuard } from './authguard.guard';

import { LoginService } from './services/login.service';
import { UserManagementService } from './services/user-management.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SignupComponent } from './components/signup/signup.component';
import { EventComponent } from './components/event/event.component';

const appRoutes:Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'aboutus', component: AboutusComponent, pathMatch: 'full'},
  {path: 'profile', canActivate: [AuthguardGuard], component: ProfileComponent, pathMatch: 'full'},
  {path: 'searchresult', component: SearchResultComponent, pathMatch: 'full'},
  {path: 'signup', component: SignupComponent, pathMatch: 'full'},
  {path: 'event', component: EventComponent, pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    AboutusComponent,
    ProfileComponent,
    SearchResultComponent,
    SignupComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    LoginService,
    UserManagementService,
    AuthguardGuard  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
