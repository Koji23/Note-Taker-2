import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, hashHistory, browserHistory} from 'react-router';
import NoteList from './NoteList.js';
import UserWrapper from './Login';
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
          <Route path="signup" component={UserWrapper}></Route>
          <Route path="notelist" component={NoteList}></Route>
        </Router>
      </main>
    );
  }
}

App.propTypes = {

}

export default App;