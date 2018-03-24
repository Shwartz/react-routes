import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import {Route} from 'react-router-dom';

import Nav from './nav/nav';
import ItemInfo from './itemInfo/itemInfo';
import Comments from './comments/comments';
import './SideDraw.css';

class SideDraw extends Component {
  state = {
    sideDraw: 'state is here'
  };

  updateTitle(title) {
    this.setState((prevState) => {
      if (prevState.sideDraw !== title) {
        return {sideDraw: title}
      }
    });
  }


  render() {
    const {match} = this.props;
    console.log('SIDEDRAW this', this);

    return (
      <Aux>
        <div className={['SideDraw', 'Open'].join(' ')}>
          <Nav data={this.props}/>
          <h3>Title</h3>
          <div className="SideDraw-content">
            <Route path={`${match.url}/`} exact={true} render={() => (<ItemInfo {...match} />)}/>
            <Route path={`${match.url}/s1`} render={() => (<ItemInfo {...match} />)}/>
            <Route path={`${match.url}/s2`} render={() => (<Comments {...match} />)}/>
          </div>
        </div>
      </Aux>
    );
  }
}

export default SideDraw;