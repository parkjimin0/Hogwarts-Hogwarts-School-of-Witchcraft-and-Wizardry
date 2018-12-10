import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { addCampus } from '../reducers/campusReducer';

class CampusForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
      description: '',
      imageUrl: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addCampus(this.state);
    this.props.history.push('/campuses');
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          Address:
          <input
            type="text"
            name="address"
            value={this.state.address}
            onChange={this.handleChange}
          />
          Description:
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          ImageUrl:
          <input
            type="text"
            name="imageUrl"
            value={this.state.imageUrl}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    addCampus: campus => dispatch(addCampus(campus)),
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(CampusForm)
);
