import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div>
      <nav>
        Welcome!
        <Link to="/"> Home</Link>
        <Link to="/students"> Students</Link>
        <Link to="/campuses"> Campuses</Link>
      </nav>
    </div>
  );
};

export default NavBar;
