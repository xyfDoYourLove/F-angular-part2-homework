import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.sass']
})
export class StudentComponent implements OnInit {
  @Input() student: Student;
  @Output() selected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  select(): void {
    this.selected.emit(this.student.name);
  }
}
