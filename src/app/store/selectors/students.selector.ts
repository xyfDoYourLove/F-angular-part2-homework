import {Student} from '../../student';

export const selectStudents = (state: {students: Student[]}) => state.students;
