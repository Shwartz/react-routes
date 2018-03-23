import React from 'react';

import './comment.css';

const comment = (props) => {

  return (
    <div className="Comment">
      <p className="Comment-name">{props.name}</p>
      <p className="Comment-email">{props.email}</p>
      <p className="Comment-body">{props.body}</p>
    </div>
  );
};
export default comment;