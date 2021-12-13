import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { UserComponent } from './user/user.component';
import { UserOneComponent } from './user/user-one/user-one.component';
import {RouterModule, Routes } from '@angular/router';

// const appRoutes : Routes = [{path : '', component :}]; Routes is constant, path is a string.

const appRoutes : Routes = [{path : '' , component : HomeComponent},
{path : 'user', component: UserComponent},
{path : 'user/:user-one',component : UserOneComponent},  //to route child or chil of child component.
{path : 'service', component : ServiceComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    UserComponent,
    UserOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)  //appRoutes is passed as an argument.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
