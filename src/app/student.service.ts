import {Injectable} from '@angular/core';
import {Student} from './student';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {selectStudent, selectStudents} from './store/selectors/students.selector';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  constructor(private store: Store) {
  }

  // get url: /assets/students.mock.json
  getStudents(): Observable<Student[]> {
    return this.store.select(selectStudents);
  }

  // get url: /assets/student{id}.mock.json
  getStudent(id: number): Observable<Student> {
    return this.store.select(selectStudent, {id});
  }
}
