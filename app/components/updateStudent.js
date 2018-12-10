import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { updateStudent, fetchSingleStudent } from '../reducers/studentReducer';
import { fetchCampus } from '../reducers/campusReducer';

class EditStudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.student.firstName,
      lastName: this.props.student.lastName,
      email: this.props.student.email,
      gpa: this.props.student.gpa,
      campusId: this.props.student.campusId,
      id: this.props.id,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchCampus();
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateStudent(this.state);
    const id = this.props.match.params.id;
    this.props.fetchSingleStudent(id);
  }
  render() {
    const campuses = this.props.campuses;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder={this.state.firstName}
            onChange={this.handleChange}
          />
          Last Name:
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            placeholder={this.state.lastName}
            onChange={this.handleChange}
          />
          Email:
          <input
            type="text"
            name="email"
            value={this.state.email}
            placeholder={this.state.email}
            onChange={this.handleChange}
          />
          GPA:
          <input
            type="text"
            name="gpa"
            value={this.state.gpa}
            placeholder={this.state.gpa}
            onChange={this.handleChange}
          />
          Campus:
          <select
            name="campusId"
            value={this.state.campusId}
            placeholder={this.state.campusId}
            onChange={this.handleChange}
          >
            {campuses.map(campus => {
              return (
                <option key={campus.id} value={campus.id}>
                  {campus.name}
                </option>
              );
            })}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    campuses: state.campusReducer.campuses,
  };
};
const mapDispatchToProps = function(dispatch) {
  return {
    updateStudent: student => dispatch(updateStudent(student)),
    fetchCampus: () => dispatch(fetchCampus()),
    fetchSingleStudent: id => dispatch(fetchSingleStudent(id)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditStudentForm)
);
