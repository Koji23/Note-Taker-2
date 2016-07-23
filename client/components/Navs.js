import React from 'react';
import {Link} from 'react-router';


var styles = {
  'marginRight': 5 + 'px'
};
var activeStyles = {
  color:'green'
}

const Nav = (props) => {
  return (
    <nav >
      <Link to="/" activeStyle={activeStyles} style={styles}>Home</Link>
      <Link to="/signup" activeStyle={activeStyles} style={styles}>Signup</Link>
      <Link to="/notelist" activeStyle={activeStyles} style={styles}>Notelist</Link>
    </nav>
  );
};

const HomeNav = () => {
  return (
    <nav>
      <Link to="/about" activeStyle={activeStyles} style={styles}>About</Link>
      <Link to="/contact" activeStyle={activeStyles} style={styles}>contact</Link>
    </nav>
  );
};

export {Nav, HomeNav};