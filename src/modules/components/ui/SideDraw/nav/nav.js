import React from 'react';
import {NavLink} from 'react-router-dom';

import './nav.css';

const itemInfo = (props) => {
  const {match} = props.data;
  console.log('NAV: this', this, props);

  const oneUp = (str) => {
    console.log('str:', str.substr(0, str.lastIndexOf("/")));
    return str.substr(0, str.lastIndexOf("/"));
  };

  return (
    <ul className="Nav">
      <li><NavLink exact={true} to={oneUp(match.url)} {...props}>X</NavLink></li>
      <li><NavLink to={`${match.url}/s1`} {...props}>S1</NavLink></li>
      <li><NavLink to={`${match.url}/s2`}>S2</NavLink></li>
    </ul>
  );
};
export default itemInfo;