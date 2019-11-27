import { SEARCH_STUDENT } from './actionTypes';

export const findStudent = name => ({
  type: SEARCH_STUDENT,
  payload: name
});