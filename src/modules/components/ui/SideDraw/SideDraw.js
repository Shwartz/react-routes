import React from 'react';

import './SideDraw.css';
import Aux from '../../hoc/Aux/Aux';

const sideDraw = (props) => {
  let attachedClasses = ['SideDraw', 'Close'];
  if (props.open) {
    attachedClasses = ['SideDraw', 'Open'];
  }

  return (
    <Aux>
      <div className={attachedClasses.join(' ')}>
        <nav>
          <p>Side menu items in draw</p>
        </nav>
      </div>
    </Aux>
  );
};
export default sideDraw;