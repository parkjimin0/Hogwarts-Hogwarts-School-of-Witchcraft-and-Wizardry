import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends Component {
  update() {
    if (this.props.student.length > 1) {
      return (
        <li className="nav-item active">
          <Link to="/profile" className="nav-link">
            My Profile
          </Link>
        </li>
      );
    }
  }
  render() {
    console.log('do we have it?', this.props.student);
    return (
      <nav className="navbar navbar-custom sticky-top navbar-expand-lg  ">
        <h1 className="navbar-brand">HSW</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admissions" className="nav-link">
                Sorting Hat Admissions
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/campuses" className="nav-link">
                Houses
              </Link>
            </li>

            <li className="nav-item active">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            {this.update()}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                More Info
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/university-life">
                  University Life
                </a>
                <a className="dropdown-item" href="/programs">
                  Programs
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="/AboutUs">
                  Hogwarts: A History
                </a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-info my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      /* <div className="container-fluid">
        <nav className="navbar-brand hidden-md hidden-sm hidden-xs" >
        </nav>

        <nav className="navbar-brand hidden-lg, visible-sm, visible-md">
          <Menu
            left
            width={300}
            customBurgerIcon={
              <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSIzMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNNCwxMGgyNGMxLjEwNCwwLDItMC44OTYsMi0ycy0wLjg5Ni0yLTItMkg0QzIuODk2LDYsMiw2Ljg5NiwyLDhTMi44OTYsMTAsNCwxMHogTTI4LDE0SDRjLTEuMTA0LDAtMiwwLjg5Ni0yLDIgIHMwLjg5NiwyLDIsMmgyNGMxLjEwNCwwLDItMC44OTYsMi0yUzI5LjEwNCwxNCwyOCwxNHogTTI4LDIySDRjLTEuMTA0LDAtMiwwLjg5Ni0yLDJzMC44OTYsMiwyLDJoMjRjMS4xMDQsMCwyLTAuODk2LDItMiAgUzI5LjEwNCwyMiwyOCwyMnoiLz48L3N2Zz4=" />
            }
            isOpen={this.state.menuOpen}
            onStateChange={state => this.handleStateChange(state)}
            id="sidebar"
            className="nav-item showHide"
          >
            <Link to="/" className="menu-item" onClick={() => this.closeMenu()}>
              Home
            </Link>
            <Link
              to="/students"
              className="menu-item"
              onClick={() => this.closeMenu()}
            >
              Students
            </Link>
            <Link
              to="/campuses"
              className="menu-item"
              onClick={() => this.closeMenu()}
            >
              Campuses
            </Link>
            <Link
              to="/about"
              className="menu-item"
              onClick={() => this.closeMenu()}
            >
              Hogwarts
            </Link>
            <Link
              to="/sortingHat"
              className="menu-item"
              onClick={() => this.closeMenu()}
            >
              Admissions
            </Link>
          </Menu>
          <h1 className="title nav-item">HSW</h1>
        </nav>
      </div> */
    );
  }
}

const mapStateToProps = function(state) {
  return {
    student: state.studentReducer.student,
  };
};

export default connect(mapStateToProps)(NavBar);
