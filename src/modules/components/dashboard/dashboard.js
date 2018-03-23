import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';
import axios from 'axios';

import SideDraw from '../ui/SideDraw/SideDraw';
import './dashboard.css';

class Dashboard extends Component {
  /*state = {
    showSideDrawer: false,
  };*/

  componentDidMount() {
    const {match} = this.props;
    console.log('Dashboard: url: ', match.path, ' path: ', match.url);
    /*if (match.path.match(/item/)) {
      this.setState({showSideDrawer: true})
    }*/

    /*axios({
      method: 'get',
      url: 'https://raw.githubusercontent.com/Shwartz/react-routes/master/db.json'
          })
      .then(res => {
        console.log('res', res);
      })
      .catch(res => {
        console.log('error res', res);
      });*/
  }

  sideDrawerCloseHandler = () => {
    this.setState({showSideDrawer: false})
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer};
    });
  };

  render() {
    const {match} = this.props;
    console.log('this: ', this);

    return (
      <div className="Dashboard">
        <p>Home: Dashboard</p>
        <button onClick={this.sideDrawerToggleHandler}>Toggle Drawer</button>

        <ul>
          <li><NavLink to="/items/:10">Item 1</NavLink></li>
        </ul>

        {/*<SideDraw
          open={this.state.showSideDrawer}
          closed={this.sideDrawerCloseHandler}/>*/}


        <Route path={`${match.url}/:10`} render={() => <SideDraw open={true} />} />
        {/*<Route
          exact
          path={match.url}
          render={() => <h3>Please select a topic.</h3>}
        />*/}
      </div>
    )
  }
}

export default Dashboard;