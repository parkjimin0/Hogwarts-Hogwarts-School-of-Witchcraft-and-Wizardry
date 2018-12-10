import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { fetchStudents, deleteStudent } from '../reducers/studentReducer';

class AllStudents extends Component {
  componentDidMount() {
    this.props.fetchStudents();
  }
  render() {
    const students = this.props.students;

    return (
      <div>
        <Link to="/StudentForm">Add Student</Link>
        {students.map(student => {
          return (
            <div key={student.id}>
              <Link to={`/students/${student.id}`}>
                <ul>
                  <li>
                    {student.firstName} {student.lastName}
                  </li>
                </ul>
              </Link>
              <button
                onClick={() => {
                  this.props.deleteStudent(student);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    students: state.studentReducer.students,
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    fetchStudents: () => dispatch(fetchStudents()),
    deleteStudent: student => dispatch(deleteStudent(student)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AllStudents)
);
