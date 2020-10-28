import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {path: 'students/:id', component: StudentDetailComponent},
  {path: 'students', component: StudentListComponent},
  {path: '', pathMatch: 'full', redirectTo: '/students'},
  {path: '**', redirectTo: '/students'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
