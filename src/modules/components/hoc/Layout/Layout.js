import React, {Component} from 'react';

import Aux from '../Aux/Aux';
import './Layout.css';
import MainMenu from '../../navigation/MainMenu/NavigationItems';
import SideDraw from '../../navigation/SideDraw/SideDraw';

class Layout extends Component {
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
    return (
      <Aux>
        <MainMenu drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDraw
          open={this.state.showSideDrawer}
          closed={this.sideDrawerCloseHandler}/>
        <main className="Content">
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout;