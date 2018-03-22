import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import SideDraw from '../ui/SideDraw/SideDraw';
import './dashboard.css';

class Dashboard extends Component {
  state = {
    showSideDrawer: false,
  };

  componentDidMount() {
    const {match} = this.props;
    console.log('Dashboard: url: ', match.path, ' path: ', match.url);
    if (match.path.match(/items/)) {
      this.setState({showSideDrawer: true})
    }
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


    return (
      <div className="Dashboard">
        <p>Home: Dashboard</p>
        <button onClick={this.sideDrawerToggleHandler}>Toggle Drawer</button>

        <ul>
          <li><NavLink to="items/l">Item 1</NavLink></li>
        </ul>

        <SideDraw
          open={this.state.showSideDrawer}
          closed={this.sideDrawerCloseHandler}/>
      </div>
    )
  }
}

export default Dashboard;