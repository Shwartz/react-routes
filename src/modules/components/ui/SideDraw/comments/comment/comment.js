import React from 'react';

import './comment.css';

const comment = (props) => {
  console.log('COMMENT: ', props);

  return (
    <div className="Comment">
      <p>{props.email}</p>
    </div>
  );
};
export default comment;