import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClassComponent } from './add-class/add-class.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddSubjectCombinationComponent } from './add-subject-combination/add-subject-combination.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { ManageClassComponent } from './manage-class/manage-class.component';
import { ManageDepartmentsComponent } from './manage-departments/manage-departments.component';
import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { ManageSubjectsCombinationComponent } from './manage-subjects-combination/manage-subjects-combination.component';
import { ManageSubjectsComponent } from './manage-subjects/manage-subjects.component';
import { ManageTeacherComponent } from './manage-teacher/manage-teacher.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {
    path: '', component: MainComponent, children: [

      { path: 'dashboard', component: DashboardComponent },
      { path: 'add-class', component: AddClassComponent },
      { path: 'edit-class/:id', component: AddClassComponent },
      { path: 'manage-class', component: ManageClassComponent },
      { path: 'add-subject', component: AddSubjectComponent },
      { path: 'edit-subject/:id', component: AddSubjectComponent },
      { path: 'manage-subjects', component: ManageSubjectsComponent },
      { path: 'add-sub-comb', component: AddSubjectCombinationComponent },
      { path: 'manage-sub-comb', component: ManageSubjectsCombinationComponent },
      { path: 'add-department', component: AddDepartmentComponent },
      { path: 'edit-department/:id', component: AddDepartmentComponent },
      { path: 'manage-departments', component: ManageDepartmentsComponent },
      { path: 'add-student', component: AddStudentComponent },
      { path: 'add-student', component: AddStudentComponent },
      { path: 'edit-student/:id', component: AddStudentComponent },
      { path: 'student/:id', component: StudentProfileComponent },
      { path: 'manage-students', component: ManageStudentsComponent },
      { path: 'add-teacher', component: AddTeacherComponent },
      { path: 'edit-teacher/:id', component: AddTeacherComponent },
      { path: 'teacher/:id', component: TeacherProfileComponent },
      { path: 'manage-teachers', component: ManageTeacherComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
