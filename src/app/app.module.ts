import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { GenderPipe } from './pipes/gender.pipe';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { BindingsdemoComponent } from './components/bindingsdemo/bindingsdemo.component';
import { NgclassdemoComponent } from './components/ngclassdemo/ngclassdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    EmployeeComponent,
    GenderPipe,
    EmployeelistComponent,
    ReactiveformComponent,
    UserComponent,
    AdduserComponent,
    BindingsdemoComponent,
    NgclassdemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
