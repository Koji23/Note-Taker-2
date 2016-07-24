import React from 'react';
import {Nav} from './Navs';


class NoteMaker extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div>
        <h1>Note Maker</h1>
        <Nav />
        <button>Send Note</button>
      </div>
    );
  }
}

export default NoteMaker;