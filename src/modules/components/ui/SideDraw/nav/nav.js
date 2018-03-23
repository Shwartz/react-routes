import React from 'react';
import {NavLink} from 'react-router-dom';

import './nav.css';

const itemInfo = (props) => {
  const {match} = props.data;
  console.log('Nav: props: ', props);
  console.log('Nav: match: ', match);

  return (
    <ul className="ItemInfo">
      <li><NavLink to={`${match.url}/s1`}>S1</NavLink></li>
      <li><NavLink to={`${match.url}/s2`}>S2</NavLink></li>
      <li><NavLink to={`${match.url}/s3`}>S3</NavLink></li>
      <li><NavLink to={`${match.url}/s4`}>S4</NavLink></li>
    </ul>
  );
};
export default itemInfo;