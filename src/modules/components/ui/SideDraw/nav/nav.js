import React from 'react';
import {NavLink} from 'react-router-dom';

import './nav.css';

const itemInfo = (props) => {
  const {match} = props.data;

  return (
    <ul className="Nav">
      <li><NavLink to={`${match.url}/s1`} {...props}>S1</NavLink></li>
      <li><NavLink to={`${match.url}/s2`}>S2</NavLink></li>
      <li><NavLink to={`${match.url}/s3`}>S3</NavLink></li>
      <li><NavLink to={`${match.url}/s4`}>S4</NavLink></li>
    </ul>
  );
};
export default itemInfo;