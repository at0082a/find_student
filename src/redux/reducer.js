import { SEARCH_STUDENT_SUCCESS, SEARCH_STUDENT_FAILURE, SEARCH_STUDENT_PENDING } from './actionTypes';

const initialState = {
  student: [],
  error: null,
  pending: false
};

const studentsReducer = (state = initialState, action) => {
  switch (action.type) {

    case SEARCH_STUDENT_PENDING :
      return {
        ...state,
        pending: true
      };

    case SEARCH_STUDENT_SUCCESS :
      return state.student.map((student) => {
        if (student.lastName === action.payload) {
          return {
            ...state,
            student: action.payload,
            pending: false
          };
        }
      }); 
    
    case SEARCH_STUDENT_FAILURE : 
      return {
        ...state,
        error: action.payload,
        pending: false
      };
    default: 
      return state;
  } 
};

//selectors:

export const getStudent = state => state.student;
export const getStudentError = state => state.error;
export const getStudentPending = state => state.pending;
