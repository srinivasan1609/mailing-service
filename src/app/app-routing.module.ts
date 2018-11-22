import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [{path:'dashboard', component: DashboardComponent},
                        {path:'login', component: LoginComponent},
                        { path: '', redirectTo: '/login', pathMatch: 'full' }];


@NgModule({

  exports: [RouterModule],

  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
