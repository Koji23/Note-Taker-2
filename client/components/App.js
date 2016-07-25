import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, hashHistory, browserHistory} from 'react-router';
import NoteList from './NoteList.js';
import {LoginForm, SignupForm} from './User';
import {Home, About, Contact} from './Home';
import NoteMaker from './NoteMaker';

import io from 'socket.io-client';

var socket = io('http://localhost:3000/');

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // socket: io() //defaults to trying to connect to the host that serves the page
    };
    // this.state.socket.on('connect', function(data) {
    //   this.state.socket.emit('join', 'Hello World from client');
    // });
  }

  render () {
    return (
      <main>
        <Router history={browserHistory}>
          <Route path="/" component={Home}>
            <Route path="about" component={About}></Route>
            <Route path="contact" component={Contact} ></Route>
          </Route>
          <Route path="login" component={LoginForm} />
          <Route component={LoginForm}>
            <Route path="signup" component={SignupForm}/>
          </Route>
          <Route path="notelist" component={NoteList} msg="HIiiII"></Route>
          <Route path="notemaker" component={NoteMaker}></Route>
        </Router>
      </main>
    );
  }
}

App.propTypes = {

}

export default App;