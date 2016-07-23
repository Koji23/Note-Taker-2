import React from 'react';
import {Router, Route, Link, hashHistory, browserHistory} from 'react-router';
import NoteList from './NoteList.js';
import Signup from './Signup';
import {Home, About, Contact} from './Home';


class App extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <main>
        <Router history={browserHistory}>
          <Route path="/" component={Home}>
            <Route path="about" component={About}/>
            <Route path="contact" component={Contact}/>
          </Route>
          <Route path="signup" component={Signup}></Route>
          <Route path="notelist" component={NoteList}></Route>
        </Router>
      </main>
    );
  }
}

export default App;