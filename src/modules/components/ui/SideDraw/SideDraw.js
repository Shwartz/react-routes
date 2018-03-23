import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import {Route} from 'react-router-dom';

import Nav from './nav/nav';
import ItemInfo from './itemInfo/itemInfo';
import Comments from './comments/comments';
import './SideDraw.css';

class SideDraw extends Component {

  render() {
    const {match} = this.props;

    return (
      <Aux>
        <div className={['SideDraw', 'Open'].join(' ')}>
          <nav>
            <Nav data={this.props}/>
          </nav>
          <div className="SideDraw-content">
            <Route path={`${match.url}/`} exact={true} render={() => (<ItemInfo {...match} />)} />
            <Route path={`${match.url}/s1`} render={() => (<ItemInfo {...match} />)} />
            <Route path={`${match.url}/s2`} render={() => (<Comments {...match} />)} />
          </div>
        </div>
      </Aux>
    );
  }
}

export default SideDraw;