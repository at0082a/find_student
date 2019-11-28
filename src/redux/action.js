import { SEARCH_STUDENT_SUCCESS, SEARCH_STUDENT_FAILURE, SEARCH_STUDENT_PENDING } from './actionTypes';

export const findStudentSuccess = ({lastName}) => ({
  type: SEARCH_STUDENT_SUCCESS,
  payload: lastName
});

export const findStudentError = error => ({
  type: SEARCH_STUDENT_FAILURE,
  payload: error
});

export const findStudentPending = error => ({
  type: SEARCH_STUDENT_PENDING,
});