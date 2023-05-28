import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { AddClassComponent } from './add-class/add-class.component';
import { ManageClassComponent } from './manage-class/manage-class.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { ManageSubjectsComponent } from './manage-subjects/manage-subjects.component';
import { AddSubjectCombinationComponent } from './add-subject-combination/add-subject-combination.component';
import { ManageSubjectsCombinationComponent } from './manage-subjects-combination/manage-subjects-combination.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { ManageDepartmentsComponent } from './manage-departments/manage-departments.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ManageStudentsComponent } from './manage-students/manage-students.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'admin', component: AdminLoginComponent },
  {
    path: '', component: MainComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'add-class', component: AddClassComponent },
      { path: 'manage-class', component: ManageClassComponent },
      { path: 'add-subject', component: AddSubjectComponent },
      { path: 'manage-subjects', component: ManageSubjectsComponent },
      { path: 'add-sub-comb', component: AddSubjectCombinationComponent },
      { path: 'manage-sub-comb', component: ManageSubjectsCombinationComponent },
      { path: 'add-department', component: AddDepartmentComponent },
      { path: 'manage-departments', component: ManageDepartmentsComponent },
      { path: 'add-student', component: AddStudentComponent },
      { path: 'manage-students', component: ManageStudentsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
