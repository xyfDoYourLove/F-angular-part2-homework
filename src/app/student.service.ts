import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  constructor() {
  }

  // get url: /assets/students.mock.json
  getStudents(): Student[] {
    return [
      {id: 1, name: 'student 1', age: 18},
      {id: 2, name: 'student 2', age: 19},
    ];
  }

  // get url: /assets/student{id}.mock.json
  getStudent(id: number): Student {
    if (id > 0) {
      return { id, name: `student ${id}`, age: 18 + id };
    } else {
      throw new Error('Not Found');
    }
  }
}
