import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import {Route} from 'react-router-dom';
import axios from 'axios';

import Nav from './nav/nav';
import ItemInfo from './itemInfo/itemInfo';
import './SideDraw.css';

class SideDraw extends Component {
  state = {
    post: []
  };

  componentDidMount() {
    console.log('sideDraw props: ', this.props);
    const {match} = this.props;
    console.log('sideDraw match', match);
  }

  render() {
    const {match} = this.props;
    return (
      <Aux>
        <div className={['SideDraw', 'Open'].join(' ')}>
          <nav>
            <Nav data={this.props}/>
          </nav>
          <div>Title: {match.params.id}</div>
          <div className="SideDraw-content">
            <Route path={`${match.url}/s1`} component={ItemInfo} />
          </div>
        </div>


      </Aux>
    );
  }
}

export default SideDraw;