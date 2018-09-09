import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes ,RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';


//routes
const appRoutes:Routes =[
  { path:"", component:HomeComponent },
  { path:"placeventure", component:LandingComponent },
  { path:"login", component:LoginComponent },
  { path:"register", component:RegisterComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
