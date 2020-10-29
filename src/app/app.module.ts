import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentComponent } from './student/student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import {StoreModule} from '@ngrx/store';
import {studentsReducer} from './store/reducers/students.reducers';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentComponent,
    StudentDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ students: studentsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
