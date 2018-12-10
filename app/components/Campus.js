import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { fetchCampus, deleteCampus } from '../reducers/campusReducer';

class AllCampuses extends Component {
  componentDidMount() {
    this.props.fetchCampus();
  }
  render() {
    const campuses = this.props.campuses;

    return (
      <div>
        <Link to="/CampusForm">Add Campus</Link>
        {campuses.map(campus => {
          return (
            <div key={campus.id}>
              <Link to={`/campuses/${campus.id}`}>
                <ul>
                  <img src={campus.imageUrl} />
                  <li>{campus.name}</li>
                </ul>
              </Link>
              <button
                onClick={() => {
                  this.props.deleteCampus(campus);
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
    campuses: state.campusReducer.campuses,
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    fetchCampus: () => dispatch(fetchCampus()),
    deleteCampus: campus => dispatch(deleteCampus(campus)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AllCampuses)
);
