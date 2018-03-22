import React, {Component} from 'react';

import Aux from '../Aux/Aux';
import './Layout.css';
import MainMenu from '../../navigation/MainMenu/NavigationItems';

class Layout extends Component {

  render() {
    return (
      <Aux>
        <MainMenu drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <main className="Content">
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout;