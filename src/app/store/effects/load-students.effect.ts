import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {StudentService} from '../../student.service';
import {loadStudents, setStudents} from '../actions/students.action';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class LoadStudentsEffect {
  loadStudentsEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadStudents),
      mergeMap(() => this.studentService.getStudents().pipe(
        map((students => setStudents({students}))),
        catchError(() => of({ type: 'load error'}))
      )),
    );
  });

  constructor(private actions$: Actions,
              private studentService: StudentService) {
  }
}
