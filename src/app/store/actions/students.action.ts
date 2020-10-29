import {createAction, props} from '@ngrx/store';
import {Student} from '../../student';

export const setStudents = createAction('SET_STUDENTS', props<{ students: Student[] }>());

export const loadStudents = createAction('LOAD_STUDENTS');
