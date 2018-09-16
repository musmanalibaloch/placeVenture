import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes ,RouterModule } from "@angular/router";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { ApiService } from "./services/api.service";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';


// ng-google maps
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ReviewpostComponent } from './reviewpost/reviewpost.component';
import { CreatepostComponent } from './createpost/createpost.component';


// App routes
const appRoutes:Routes =[
  { path:"", component:HomeComponent },
  { path:"placeventure", component:LandingComponent },
  { path:"login", component:LoginComponent },
  { path:"register", component:RegisterComponent },
  { path:"reviewpost", component:ReviewpostComponent },
  { path:"createpost", component:CreatepostComponent },
]



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    ReviewpostComponent,
    CreatepostComponent
  ],
  imports: [
      AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDtWJ1VVgvC4WzSB4CdQvso7XHAgykEXaA',
      libraries: ["places"]
    }),
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
