import React from 'react';
import {NavLink} from 'react-router-dom';

import './itemInfo.css';

const nav = (props) => {
  const {match} = props;
  return (
    <div className="ItemInfo">
      <h1>Item info</h1>
    </div>
  );
};
export default nav;