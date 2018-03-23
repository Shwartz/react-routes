import React from 'react';

import './SideDraw.css';
import Aux from '../../hoc/Aux/Aux';

const sideDraw = (props) => {
  console.log('sidedraw props: ', props);
  const {match} = props;
  console.log('sidedraw match', match);

  return (
    <Aux>
      <div className={['SideDraw', 'Open'].join(' ')}>
        <nav>
          <p>Side menu items in draw</p>
          <p>Params: {match.params.id}</p>
        </nav>
      </div>
    </Aux>
  );
};
export default sideDraw;