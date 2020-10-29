import { Injectable } from '@angular/core';
import { Student } from './student';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  constructor(private http: HttpClient) {
  }

  // get url: /assets/students.mock.json
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>('/assets/students.mock.json').pipe(
      catchError(this.handleError<Student[]>('getStudents', []))
    );
  }

  // get url: /assets/student{id}.mock.json
  getStudent(id: number): Observable<Student> {
    return this.http.get<Student>(`/assets/student${id}.mock.json`).pipe(
      catchError(this.handleError<Student>(`getStudent${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.error(operation + ':' + error);
      return of(result as T);
    };
  }
}
