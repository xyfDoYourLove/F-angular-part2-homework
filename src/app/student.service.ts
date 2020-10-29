import {Injectable} from '@angular/core';
import {Student} from './student';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  constructor(private http: HttpClient) {
  }

  // get url: /assets/students.mock.json
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>('/assets/students.mock.json');
  }

  // get url: /assets/student{id}.mock.json
  getStudent(id: number): Observable<Student> {
    return this.http.get<Student>(`/assets/student${id}.mock.json`);
  }
}
