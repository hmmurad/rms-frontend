import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClassComponent } from './add-class/add-class.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { AddExamComponent } from './add-exam/add-exam.component';
import { AddMarksComponent } from './add-marks/add-marks.component';
import { AddResultComponent } from './add-result/add-result.component';
import { AddSessionComponent } from './add-session/add-session.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { ManageClassComponent } from './manage-class/manage-class.component';
import { ManageDepartmentsComponent } from './manage-departments/manage-departments.component';
import { ManageExamComponent } from './manage-exam/manage-exam.component';
import { ManageMarksComponent } from './manage-marks/manage-marks.component';
import { ManageResultComponent } from './manage-result/manage-result.component';
import { ManageSessionComponent } from './manage-session/manage-session.component';
import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { ManageSubjectsComponent } from './manage-subjects/manage-subjects.component';
import { ManageTeacherComponent } from './manage-teacher/manage-teacher.component';
import { RoleGuard } from './shared/guards/roles.guard';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { ViewResultModalComponent } from './view-result-modal/view-result-modal.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'add-class',
        component: AddClassComponent,
        canActivate: [RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'edit-class/:id',
        component: AddClassComponent,
        canActivate: [RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'manage-class',
        component: ManageClassComponent,
        canActivate: [RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'add-subject',
        component: AddSubjectComponent,
        canActivate: [RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'edit-subject/:id',
        component: AddSubjectComponent,
        canActivate: [RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'manage-subjects',
        component: ManageSubjectsComponent,
        canActivate: [RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'add-department',
        component: AddDepartmentComponent,
        canActivate: [RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'edit-department/:id',
        component: AddDepartmentComponent,
        canActivate: [RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'manage-departments',
        component: ManageDepartmentsComponent,
        canActivate: [RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'add-student',
        component: AddStudentComponent,
        canActivate: [RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'add-student',
        component: AddStudentComponent,
        canActivate: [RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'edit-student/:id',
        component: AddStudentComponent,
        canActivate: [RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'student/:id',
        component: StudentProfileComponent,
        canActivate: [RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'manage-students',
        component: ManageStudentsComponent,
        canActivate: [RoleGuard],
        data: { role: 'Admin' },
      },

      {
        path: 'edit-teacher/:id',
        component: TeacherProfileComponent,
        canActivate: [RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'teachers/:id',
        component: TeacherProfileComponent,
        canActivate: [RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'manage-teachers',
        component: ManageTeacherComponent,
        canActivate: [RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'add-result',
        component: AddResultComponent,
        canActivate: [RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'manage-results',
        component: ManageResultComponent,
        canActivate: [RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'view-results/:id',
        component: ViewResultModalComponent,
        canActivate: [RoleGuard],
        data: { role: 'Admin' },
      },
      { path: 'add-marks', component: AddMarksComponent },
      {
        path: 'manage-marks',
        component: ManageMarksComponent,
        // canActivate: [RoleGuard],
        // data: { role: 'Admin' },
      },
      {
        path: 'add-exam',
        component: AddExamComponent,
        canActivate: [RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'edit-exam/:id',
        component: AddExamComponent,
        canActivate: [RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'manage-exam',
        component: ManageExamComponent,
        canActivate: [RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'add-session',
        component: AddSessionComponent,
        canActivate: [RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'edit-session/:id',
        component: AddSessionComponent,
        canActivate: [RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'manage-sessions',
        component: ManageSessionComponent,
        canActivate: [RoleGuard],
        data: { role: 'Admin' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
