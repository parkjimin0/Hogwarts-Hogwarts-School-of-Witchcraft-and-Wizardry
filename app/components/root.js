import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Student from './Student';
import NavBar from './NavBar';
import Campus from './Campus';
import singleCampus from './singleCampus';
import singleStudent from './singleStudent';
import StudentForm from './StudentForm';
import CampusForm from './CampusForm';

const Root = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/students" component={Student} />
          <Route exact path="/campuses" component={Campus} />
          <Route exact path="/campuses/:id" component={singleCampus} />
          <Route exact path="/students/:id" component={singleStudent} />
          <Route exact path="/StudentForm" component={StudentForm} />
          <Route exact path="/CampusForm" component={CampusForm} />
        </Switch>
      </main>
    </div>
  );
};

export default Root;
