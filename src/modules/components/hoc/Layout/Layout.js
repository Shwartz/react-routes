import React, {Component} from 'react';

import Aux from '../Aux/Aux';
import './Layout.css';
import MainMenu from '../../navigation/MainMenu/';
import SideDraw from '../../components/Navigation/SideDraw/SideDraw';

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
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDraw
          open={this.state.showSideDrawer}
          closed={this.sideDrawerCloseHandler}/>
        <main className={styles.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout;