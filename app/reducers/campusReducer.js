import axios from 'axios';
const GOT_ALL_CAMPUSES_FROM_SERVER = 'GOT_ALL_CAMPUSES_FROM_SERVER';
const GOT_ONE_CAMPUS_FROM_SERVER = 'GOT_ONE_CAMPUS_FROM_SERVER';
const DELETE_CAMPUS_TO_SERVER = 'DELETE_CAMPUS_TO_SERVER';
const deleteCampusToServer = campus => {
  return {
    type: DELETE_CAMPUS_TO_SERVER,
    campus,
  };
};
const gotAllCampuses = campuses => {
  return {
    type: GOT_ALL_CAMPUSES_FROM_SERVER,
    campuses,
  };
};

const gotOneCampus = campus => {
  return {
    type: GOT_ONE_CAMPUS_FROM_SERVER,
    campus,
  };
};

export const fetchCampus = () => async dispatch => {
  try {
    const response = await axios.get('/api/campuses');
    const campuses = response.data;
    dispatch(gotAllCampuses(campuses));
  } catch (err) {
    console.error('You got error with fetchCampuses', err);
  }
};

export const fetchSingleCampus = id => async dispatch => {
  try {
    const response = await axios.get(`/api/campuses/${id}`);
    const singleCampus = response.data;
    dispatch(gotOneCampus(singleCampus));
  } catch (err) {
    console.error('You got an error with fetchSingleCampus', err);
  }
};

export const addCampus = campus => async dispatch => {
  try {
    const response = await axios.post(`/api/campuses`, campus);
    const addedCampus = response.data;
    dispatch(gotOneCampus(addedCampus));
  } catch (err) {
    console.error('You got an error with addCampus', err);
  }
};

export const deleteCampus = campus => async dispatch => {
  try {
    await axios.delete(`/api/campuses/${campus.id}`);
    dispatch(deleteCampusToServer(campus));
  } catch (err) {
    console.error('You got an error with deleteCampus', err);
  }
};
const initialState = {
  campuses: [],
  campus: {},
};

const campusReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_CAMPUSES_FROM_SERVER:
      return { ...state, campuses: action.campuses };
    case GOT_ONE_CAMPUS_FROM_SERVER:
      return {
        ...state,
        campuses: [...state.campuses, action.campus],
        campus: action.campus,
      };
    case DELETE_CAMPUS_TO_SERVER:
      return {
        ...state,
        campuses: state.campuses.filter(ele => ele.id !== action.campus.id),
      };
    default:
      return state;
  }
};

export default campusReducer;
