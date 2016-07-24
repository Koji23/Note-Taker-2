import React from 'react';
import {Nav} from './Navs';

const NoteList = (props) => {
  return (
    <div>
      <h1>NoteList</h1>
      <div>{props.route.msg}</div>
      <Nav />
    </div>
  );
}

export default NoteList;