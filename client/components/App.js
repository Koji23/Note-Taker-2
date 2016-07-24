import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, hashHistory, browserHistory} from 'react-router';
import NoteList from './NoteList.js';
import {LoginForm, SignupForm} from './User';
import {Home, About, Contact} from './Home';


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <main>
        <Router history={browserHistory}>
          <Route path="/" component={Home}>
            <IndexRoute component={About}></IndexRoute>
            <Route path="contact" component={Contact} ></Route>
          </Route>
          <Route path="login" component={LoginForm}>
            <Route path="signup" component={SignupForm}/>
          </Route>
          <Route path="notelist" component={NoteList}></Route>
        </Router>
      </main>
    );
  }
}

App.propTypes = {

}

export default App;