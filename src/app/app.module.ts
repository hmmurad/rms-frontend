import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { AddClassComponent } from './add-class/add-class.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { AddExamComponent } from './add-exam/add-exam.component';
import { AddMarksComponent } from './add-marks/add-marks.component';
import { AddResultComponent } from './add-result/add-result.component';
import { AddSessionComponent } from './add-session/add-session.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddSubjectCombinationComponent } from './add-subject-combination/add-subject-combination.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AuthModule } from './auth/auth.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ManageClassComponent } from './manage-class/manage-class.component';
import { ManageDepartmentsComponent } from './manage-departments/manage-departments.component';
import { ManageExamComponent } from './manage-exam/manage-exam.component';
import { ManageResultComponent } from './manage-result/manage-result.component';
import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { ManageSubjectsCombinationComponent } from './manage-subjects-combination/manage-subjects-combination.component';
import { ManageSubjectsComponent } from './manage-subjects/manage-subjects.component';
import { ManageTeacherComponent } from './manage-teacher/manage-teacher.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { ManageMarksComponent } from './manage-marks/manage-marks.component';
import { AddMarksModalComponent } from './add-marks-modal/add-marks-modal.component';

import { MatDialogModule } from '@angular/material/dialog';
import { ManageSessionComponent } from './manage-session/manage-session.component';

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
    ManageStudentsComponent,
    StudentProfileComponent,
    AddTeacherComponent,
    ManageTeacherComponent,
    TeacherProfileComponent,
    AddResultComponent,
    ManageResultComponent,
    AddMarksComponent,
    ManageMarksComponent,
    ManageClassComponent,
    AddExamComponent,
    ManageExamComponent,
    AddSessionComponent,
    AddMarksModalComponent,
    ManageSessionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
