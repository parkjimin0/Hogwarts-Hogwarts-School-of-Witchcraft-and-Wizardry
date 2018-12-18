import axios from 'axios';

const GOT_ALL_STUDENTS_FROM_SERVER = 'GOT_ALL_STUDENTS_FROM_SERVER';
const GOT_ONE_STUDENT_FROM_SERVER = 'GOT_ONE_STUDENT_FROM_SERVER';
const DELETE_STUDENT_TO_SERVER = 'DELETE_STUDENT_TO_SERVER';
const UPDATE_STUDENT_TO_SERVER = 'UPDATE_STUDENT_TO_SERVER';

const updateStudentToServer = student => {
  return {
    type: UPDATE_STUDENT_TO_SERVER,
    student,
  };
};

const deleteStudentToServer = student => {
  return {
    type: DELETE_STUDENT_TO_SERVER,
    student,
  };
};

const gotAllStudents = students => {
  return {
    type: GOT_ALL_STUDENTS_FROM_SERVER,
    students,
  };
};

const gotOneStudent = student => {
  return {
    type: GOT_ONE_STUDENT_FROM_SERVER,
    student,
  };
};

export const updateStudent = student => {
  return async function(dispatch) {
    try {
      await axios.put(`/api/students/${student.id}`, student);
      const response = await axios.get(`/api/students/${student.id}`);
      const singleStudent = response.data;
      dispatch(updateStudentToServer(singleStudent));
    } catch (err) {
      console.error('You got updatestudent wrong', err);
    }
  };
};

export const fetchStudents = () => {
  return async function(dispatch) {
    try {
      const response = await axios.get('/api/students');
      const students = response.data;
      dispatch(gotAllStudents(students));
    } catch (err) {
      console.log('You got error with fetchStudents', err);
    }
  };
};

export const fetchSingleStudent = id => async dispatch => {
  try {
    const response = await axios.get(`/api/students/${id}`);
    const singleStudent = response.data;
    dispatch(gotOneStudent(singleStudent));
  } catch (err) {
    console.log('You got an error with fetchSingleStudent', err);
  }
};

export const login = student => async dispatch => {
  try {
    const response = await axios.get('/api/students');
    const allStudents = response.data;
    const foundMatch = allStudents.filter(s => {
      return student.username === s.email && student.password === s.password;
    });

    if (foundMatch.length) {
      dispatch(gotOneStudent(foundMatch[0]));
    }
  } catch (err) {
    console.error('You have have error with login');
  }
};

export const addStudent = student => async dispatch => {
  try {
    const added = await axios.post('/api/students', student);
    const addedStudent = added.data;
    dispatch(gotOneStudent(addedStudent));
  } catch (err) {
    console.error('You have an error with addStudent');
  }
};

export const deleteStudent = student => async dispatch => {
  try {
    await axios.delete(`/api/students/${student.id}`);
    dispatch(deleteStudentToServer(student));
  } catch (err) {
    console.error('You got an error with deleteStudent', err);
  }
};

const initialState = {
  students: [],
  student: {},
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_STUDENTS_FROM_SERVER:
      return { ...state, students: action.students };
    case GOT_ONE_STUDENT_FROM_SERVER:
      return {
        ...state,
        students: [...state.students, action.student],
        student: action.student,
      };
    case DELETE_STUDENT_TO_SERVER:
      return {
        ...state,
        students: state.students.filter(ele => ele.id !== action.student.id),
      };
    case UPDATE_STUDENT_TO_SERVER:
      return {
        ...state,
        students: state.students.map(ele => {
          if (ele.id === action.student.id) {
            return action.student;
          } else {
            return ele;
          }
        }),
        student: action.student,
      };
    default:
      return state;
  }
};

export default studentReducer;
