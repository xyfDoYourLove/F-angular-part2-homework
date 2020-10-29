import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';
import {Store} from '@ngrx/store';
import {setStudents} from '../store/actions/students.action';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.sass']
})
export class StudentListComponent implements OnInit {
  students: Student[];
  selected: string;
  target: string;

  constructor(private router: Router,
              private studentService: StudentService,
              private store: Store) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(students => this.students = students);
  }

  goto(): void {
    this.router.navigate(['/students', this.target]);
  }

  setStudents(): void {
    this.store.dispatch(setStudents({
      students: [
        {id: 1, name: '1', age: 1},
        {id: 2, name: '2', age: 2}
      ],
    }));
  }

}
