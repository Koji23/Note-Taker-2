import React from 'react';
import {Nav, HomeNav} from './Navs';

const Home = (props) => {
  return (
    <div>
      <h1>Home</h1>
      <Nav />
      <HomeNav />
      {props.children}
    </div>
  );
}

const About = (props) => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}

const Contact = (props) => {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
}

export {Home, About, Contact};