import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { AddClassComponent } from './add-class/add-class.component';
import { ManageClassComponent } from './manage-class/manage-class.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { ManageSubjectsComponent } from './manage-subjects/manage-subjects.component';
import { ManageSubjectsCombinationComponent } from './manage-subjects-combination/manage-subjects-combination.component';
import { AddSubjectCombinationComponent } from './add-subject-combination/add-subject-combination.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { ManageDepartmentsComponent } from './manage-departments/manage-departments.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ManageStudentsComponent } from './manage-students/manage-students.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    MainComponent,
    AdminLoginComponent,
    DropdownDirective,
    AddClassComponent,
    ManageClassComponent,
    AddSubjectComponent,
    ManageSubjectsComponent,
    ManageSubjectsCombinationComponent,
    AddSubjectCombinationComponent,
    AddDepartmentComponent,
    ManageDepartmentsComponent,
    AddStudentComponent,
    ManageStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
