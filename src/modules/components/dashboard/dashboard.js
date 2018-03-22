import React, {Component} from 'react';
import SideDraw from '../ui/SideDraw/SideDraw';
import './dashboard.css';

class Dashboard extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerCloseHandler = () => {
    this.setState({showSideDrawer: false})
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer};
    });
  };

  render() {
    console.log('this', this);
    return (
      <div className="Dashboard">
        <p>Home: Dashboard</p>
        <button onClick={this.sideDrawerToggleHandler}>Toggle Drawer</button>

        <ul>
          <li><a href="#">Item 1</a></li>
        </ul>

        <SideDraw
          open={this.state.showSideDrawer}
          closed={this.sideDrawerCloseHandler}/>
      </div>
    )
  }
}

export default Dashboard;