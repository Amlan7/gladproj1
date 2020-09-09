import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { UserComponent } from './components/user/user.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { NgclassdemoComponent } from './components/ngclassdemo/ngclassdemo.component';
import {AuthGuard} from './services/auth.guard'
  

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'employee',component:EmployeeComponent,canActivate: [AuthGuard]},
  {path:'employeelist',component:EmployeelistComponent},
  {path:'reactiveform',component:ReactiveformComponent},
  {path:'user',component:UserComponent},
  {path: 'adduser', component:AdduserComponent},
  {path: 'ngclassdemo', component:NgclassdemoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
