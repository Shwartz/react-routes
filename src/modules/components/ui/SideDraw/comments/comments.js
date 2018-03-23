import React from 'react';

import './comments.css';

const nav = (props) => {
  const {match} = props;
  console.log('comments match: ', match);
  return (
    <div className="ItemInfo">
      <h1>Comments - S2</h1>
    </div>
  );
};
export default nav;