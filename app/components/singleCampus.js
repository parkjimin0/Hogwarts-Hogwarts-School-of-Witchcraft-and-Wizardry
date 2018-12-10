import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { fetchSingleCampus } from '../reducers/campusReducer';

class SingleCampus extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchSingleCampus(id);
  }
  render() {
    const campus = this.props.campus;
    console.log('what is campus.students', campus.students);
    return (
      <div>
        <img src={campus.imageUrl} />
        <div> Name : {campus.name}</div>
        <div> Address: {campus.address}</div>
        <div> Description: {campus.description}</div>

        {campus.students !== undefined && campus.students.length ? (
          <div>
            Students from this Campus:
            {campus.students.map(student => {
              return (
                <div key={student.id}>
                  <Link to={`/students/${student.id}`}>
                    <ul>
                      <li>
                        {student.firstName} {student.lastName}
                      </li>
                    </ul>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <div>No Students in this Campus</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    campus: state.campusReducer.campus,
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    fetchSingleCampus: id => dispatch(fetchSingleCampus(id)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SingleCampus)
);
