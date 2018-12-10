import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { addStudent } from '../reducers/studentReducer';
import { fetchCampus } from '../reducers/campusReducer';

class StudentForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gpa: 0,
      campusId: 1,
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
    this.props.addStudent(this.state);
    this.props.history.push('/students');
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
            onChange={this.handleChange}
          />
          Last Name:
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          Email:
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          GPA:
          <input
            type="text"
            name="gpa"
            value={this.state.GPA}
            onChange={this.handleChange}
          />
          Campus:
          <select
            value={this.state.campusId}
            name="campusId"
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
    addStudent: student => dispatch(addStudent(student)),
    fetchCampus: () => dispatch(fetchCampus()),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(StudentForm)
);
