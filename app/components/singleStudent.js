import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { fetchSingleStudent } from '../reducers/studentReducer';
import EditStudentForm from './updateStudent';

class SingleStudent extends Component {
  constructor() {
    super();
    this.state = {
      hidden: true,
    };
  }

  toggleForm = () => {
    this.setState(state => ({
      hidden: !state.hidden,
    }));
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchSingleStudent(id);
  }
  render() {
    const student = this.props.student;
    const id = this.props.match.params.id;
    return (
      <div>
        <img src={student.imageUrl} />
        <div> First Name : {student.firstName}</div>
        <div> Last Name: {student.lastName}</div>
        <div> Email: {student.email}</div>
        <div> GPA: {student.gpa}</div>
        {student.campus ? (
          <div>
            Campus:
            <Link to={`/campuses/${student.campusId}`}>
              {student.campus.name}
            </Link>
          </div>
        ) : (
          <div>No Campus</div>
        )}
        <button type="button" onClick={this.toggleForm}>
          {this.state.hidden
            ? 'Edit Student Information'
            : `Don't Edit Student Information`}
        </button>
        {!this.state.hidden && <EditStudentForm student={student} id={id} />}
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    student: state.studentReducer.student,
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    fetchSingleStudent: id => dispatch(fetchSingleStudent(id)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SingleStudent)
);
