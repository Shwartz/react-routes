import React from 'react';
import {NavLink} from 'react-router-dom';

import './item.css';

const item = (props) => {
  return (
    <li className="Item">
      <NavLink to={`/items/${props.id}`}>{props.title}</NavLink>
    </li>
  );
};
export default item;