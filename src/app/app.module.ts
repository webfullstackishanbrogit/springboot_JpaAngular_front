import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SetmycolorDirective } from './directives/setmycolor.directive';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { RouterModule, Routes } from '@angular/router'; //routing configurations
import {FormsModule} from '@angular/forms';
import { FeedbackComponent } from './feedback/feedback.component';//import forms module
import {HttpClientModule} from '@angular/common/http';//form data send using this module so we have to add this dependacy


const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent }, // set relevent component path to type "dashboard"
  {path:'navbar',component:NavbarComponent},
  {path:'feedback',component:FeedbackComponent}
  //{path:'**',component:NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    NavbarComponent,
    SetmycolorDirective,
    DashboardComponent,
    FeedbackComponent,
 
  
  ],
  imports: [
    RouterModule.forRoot(appRoutes),//router configaration
    FormsModule,//form configuarations
    HttpClientModule, //for http configuarations
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
