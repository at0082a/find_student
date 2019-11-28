import { findStudentSuccess, findStudentError, findStudentPending } from './action';

const findStudent = ({ lastName }) => {
  return dispatch => {
    dispatch(findStudentPending());
    fetch(`https:localhost:3001/students/${lastName}`).then (res => 
      res.json())
      .then (res => { 
        if (res.error) {
          throw(res.error);
        }
        dispatch(findStudentSuccess(res.data));
        return res.data;
      })
      .catch (error => {
        dispatch(findStudentError(error));
      });
  };
};

export default findStudent;